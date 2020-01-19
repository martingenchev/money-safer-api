const router = require('express').Router({ mergeParams: true });
const transactionController = require('../../controllers/transactionController')();
const auth = require('../../middleware/auth');


router.post("/create-transaction", auth, async (req,res, next) => {

    try{
        const data = await transactionController.createTransaction(req.body, req.user.id)
        res.json(data);
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});

router.post("/update-transaction", auth, async (req,res,next)=>{
    try{
        const data = await transactionController.updateTransaction(req.body);
        res.json(data);
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});

router.post("/delete-transaction", auth, async (req,res,next)=>{
    try{
        const data = await transactionController.deleteTransaction(req.body.id);
        res.json(data);
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});

router.get("/all-transaction", auth, async (req,res,next)=>{
    try {
        const data = await transactionController.getAllTransactions(req.user.id);
        res.json(data)
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});

router.get("/one-transaction", auth, async (req,res,next)=>{
    try {
        const data = await transactionController.getSingleTransaction(req.body.id, req.user.id);
        res.json(data);
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});
router.get("/total-balance", auth, async (req,res,next)=>{
    try{
        const data = await transactionController.totalBalance(req.user.id);
        res.json(data)
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});
router.get("/total-income", auth, async (req,res,next)=>{
    try{
        const data = await transactionController.totalIncome(req.user.id);
        res.json(data)
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});
router.get("/total-outcome", auth, async (req,res,next)=>{
    try{
        const data = await transactionController.totalOutcome(req.user.id);
        res.json(data)
    }catch (e) {
        // TODO create logging system to monitor such errors.
        console.log(e);
        res.status(500).send("Internal Server error");
    }
});
module.exports = router;