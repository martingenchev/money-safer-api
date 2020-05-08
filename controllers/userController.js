const UserModel = require('../models').Users;
const ContriesModel = require('../models').Countries
const TokenModel = require('../models').access_tokens;
let bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

class userController{


    createUser(data){
        return new Promise((resolve, reject)=>{
            if(!data.username) reject({"500": "Username is required"});

            if(!data.email) reject({"500": "email is required"});

            if(!data.country_id) reject({"500": "country_id is required"});

            const userData = {
                username: data.username,
                password:data.password,
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                role: 1,
                adress: data.adress,
                country_id: data.country_id,
                active: 0
            };
            // TODO make checking if the username or mail are matching
            bcrypt.hash(data.password, saltRounds, function (err, hash) {
                userData.password = hash;
                UserModel.create(userData).then( result=>{
                    resolve(result);
                }).catch(err=>{
                    // TODO create logging system to monitor such errors.
                    console.log(err);
                    reject("Invalid field");
                })

            });

        }).catch(e =>{
            console.log('das. error', e )
            // TODO create logging system to monitor such errors.
            return e
        });

    } // Create User

  async loginUser(data){
        if(!data.email) throw new Error("Not valid credentials");

        if(!data.password) throw new Error("Not valid credentials");
        console.log(data.password)
        const userData = await  UserModel.findOne({
            where:{email: data.email},
            attributes:['id','username','password', 'first_name', 'last_name', 'email', 'adress']
        });
        // TODO check if user is active or not
        if(!userData) throw new Error("Not valid credentials");
        console.log(userData.password)
        const match =  await  bcrypt.compare(data.password, userData.password);
        console.log(match);
        if(!match) throw new Error("Not valid credentials")
        // TODO put the secret key in ENV file. DON"T expose it like that
        const token = jwt.sign( {id : userData.id}, "wlkerjfpowu5lkwfiustlk3459uqeflkjsdtlku345oq", {expiresIn: 604800 } );

        await TokenModel.create({token: token, user_id: userData.id});
        let user = {...userData.dataValues};
        user.token = token;
        delete user.id;
        delete user.password;
        return  user;
    }

    async getUserData(data){
        const userData = await  UserModel.findOne({
            where:{id:data},
            attributes:['username', 'first_name', 'last_name', 'email', 'adress'],
            include:[{model: ContriesModel,right: true, attributes:['country_name','id']   }]
        });
        const user = {...userData.dataValues};
        console.log(user)
        return user;
    }

    async logOut(data){
       let  test =  await TokenModel.destroy({where:{user_id: data}});
        //console.log(test)
        return {"status":"1" };
    }
    async updateUser(data){
        try {
            if(!data.first_name) throw new Error("Missing values");

            if(!data.last_name) throw new Error("Missing values");
            if(!data.adress) throw new Error("Missing values");
            if(!data.country_id) throw new Error("Missing values");
            if(!data.password) throw new Error("Missing values");
            if(!data.newPassword)throw new Error("Missing values");

            const userPassword = await  UserModel.findOne({
                where:{id:data.id},
                attributes:['password']
            });

            const match =  await  bcrypt.compare(data.newPassword, userPassword.password);
            if(match) throw new Error("Passwords should not match")
            const hashedPassword = await bcrypt.hash(data.newPassword,10);;
            // TODO SANITIZE THE   SQL queries
            const userData = await UserModel.update({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    adress: data.adress,
                    country_id: data.country_id,
                    password: data.newPassword
                },
                {
                    where: {id: data.id}
                });

            return userData;
        }catch(e){
            console.log(e);
           return "Internal server error ";
        }

    }
    async deleteUser(data){
    const userData = await UserModel.destroy({
        where:{id:data}
    });
        return userData;

    }

    async getCountries(){
    const countries = await ContriesModel.findAll();
     return countries;
    }
}


module.exports = () =>{
    return new userController();
};
