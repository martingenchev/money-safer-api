const router = require('express').Router({ mergeParams: true });
const userController = require('../../controllers/userController')();
const auth = require('../../middleware/auth');

router.get('/test1', (req, res) => res.status(200).send({
    message: 'Testing api'}
    ));

router.post("/create-user", (req,res,next) => {
    userController.createUser(req.body).then( (result, reject)=>{
        res.status(200).json(result)
    }).catch(next)
});

router.post("/login",  async (req,res, next) => {

    try{
        const user = await userController.loginUser(req.body);
        res.status(200).json(user);
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(400).send("Not valid credentials");
    }
});

router.post("/logout", auth, async (req, res)=>{
    try{
       // userData = {token:req.user.user_tokens[0].dataValues.token, id: req.user.id };
        const data = await userController.logOut(req.user.id);
        console.log(data);
        res.status(200).send("Success");
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal server error ");
    }
});

router.get("/getUserData", auth , async (req,res,next) =>{
   try{
       const data = await userController.getUserData(req.user.id);
       res.status(200).send(data);
   }catch (e) {
       // TODO create logging system to monitor such errors.
       console.log(e);
       res.status(400).send("Not valid credentials");
   }
});

router.post("/update-user", auth, async (req,res,next)=>{
    try{
        const user = {...req.body};
        user.id = req.user.id;
        const data = await  userController.updateUser(user);
        res.status(200).send(data);
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal server error");
    }

});

router.post("/deleteUser", auth, async (req,res,next) =>{
    try{
        const data = await userController.deleteUser(req.user.id);
        res.sendStatus(200);
    }catch (e) {
        console.log(e);
        res.status(500).send("Internal server error");
    }
});
router.get('/countries', async (req, res,next)=>{
   try {
       const data = await userController.getCountries()
       res.status(200).send(data);
   }catch (e) {
       console.log(e)
       res.status(500).send("Internal server error");
   }
});
module.exports = router;
