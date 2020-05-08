const jwt = require('jsonwebtoken');
const userModel = require('../models').Users;
const TokenModel = require('../models').access_tokens;

const auth = async(req, res, next) =>{

    try{

        const token = req.header('Authorization').replace('Bearer ','');
console.log('TOKEN', token);

        // TODO put the secret key in ENV file. DON"T expose it like that
        const decoded = jwt.verify(token, "wlkerjfpowu5lkwfiustlk3459uqeflkjsdtlku345oq");

        const user = await userModel.findOne({
            where:{id: decoded.id},
            attributes: ["id", "role"],
            include: [{
                model: TokenModel ,
                where:{token: token},
                as:'user_tokens',
                attributes:["token"]
            }]
        });
        console.log('USER', user);

        if(!user){
            throw new Error();
        }
        // Saving some user data in the middleware request
        req.user = {...user.dataValues};
        req.token = token;
        next();
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(401).send({error: "Please Authenticate"})
    }

};

module.exports = auth;