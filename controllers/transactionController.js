const TransactionModel = require('../models').Transactions;

class TransactionController {

    async createTransaction(data, userID){
        try{
            console.log(data)
            //if( data.transaction_type ) throw new Error("Missing data");
            if(!data.amount) throw new Error("Missing data");
            if(!data.transactions_category_id) throw new Error("Missing data");
             data.user_id = userID;
            const transcationData = await  TransactionModel.create(data);

            return transcationData
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log('KOP====>', e);
            return "Internal server error ";
        }
    }

    async getAllTransactions(data){
        try{
            const transcationData = await  TransactionModel.findAll({
                where:{user_id: data},
                attributes: ['transaction_type', 'amount', 'id', 'transactions_category_id']
            });

            return  transcationData;
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }
    }

    async getSingleTransaction(ID, userID){
        try{
            const transcationData = await  TransactionModel.findAll({
                where:{user_id: userID, id: ID},
                attributes: ['transaction_type', 'amount', 'transactions_category_id']
            });
            return transcationData;
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }
    }

    async updateTransaction(data){
        try {
            if(!data.amount) throw new Error('Missing values');
            if(!data.transactions_category_id) throw new Error('Missing values');
            if(!data.id) throw new Error('Missing values');

            const transcationData = await TransactionModel.update({
                transaction_type : data.transaction_type,
                amount: data.amount,
                transactions_category_id: data.transactions_category_id
            },{
                where:{id:data.id}
            });

            return transcationData;
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }
    }

    async deleteTransaction(data){
        try{
            const transcationData = await TransactionModel.destroy({where:{id:data}});
            return transcationData
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }

    }

    async totalBalance(userID){
        try{
            const Income = await TransactionModel.sum('amount', {
                where:{user_id: userID, transaction_type: true}
            });
            const Outcome = await TransactionModel.sum('amount', {
                where:{user_id: userID, transaction_type: false}
            });
            let Total = Income - Outcome
            return Total;
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }
    }

    async totalIncome(userID){

        try{
            const transcationData = await TransactionModel.sum('amount', {
                where:{user_id: userID, transaction_type: true}
            });

            return transcationData;
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }
    }

    async totalOutcome(userID){
        try{
            const transcationData = await TransactionModel.sum('amount', {
                where:{user_id: userID, transaction_type: false}
            });

            return transcationData;
        }catch (e) {
            // TODO create logging system to monitor such errors.
            console.log(e)
        }
    }
}

module.exports = ()=>{
    return new TransactionController();
};