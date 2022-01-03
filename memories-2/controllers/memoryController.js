
const {memoryModel} = require("../models/memoryModel");
const {userModel} = require("../models/userModel");

exports.memoryController =  {

    async getAll(req,res){
        try {

            
                let data = await memoryModel.find({aprove: true});
                res.json(data);
            
              
        } catch (error) {
            res.send("somthing is broken");
        } 
    },
    async getAllByUserID(req,res){
        try {

            
                let data = await memoryModel.find({userID:req.params.userid});
                res.json(data);
            
              
        } catch (error) {
            res.send("somthing is broken");
        } 
    },
    async getAllManeger(req,res){
        try {

            if(res.locals.userType == 'm'){
                let memories = await memoryModel.find({aprove: false});
                let arr = [];
                for(let i = 0; i < memories.length; i++){
                    let user = await userModel.findOne({_id:memories[i].userID});
                    let obj = {...memories[i]._doc}
                    obj.userName = user._doc.full_name;
                    arr.push(obj);
                }
                res.json(arr);
            }else{
                
                res.send("you have to be maneger")
            }
              
        } catch (error) {
            console.log(error);
            res.send("somthing is broken");
        } 
    },

    async getByID(req,res){
        try {
            let data = await memoryModel.findOne({_id:req.params.id});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async add(req,res){
        try {

            const obj = new memoryModel(req.body);
            const result = await obj.save();

            if(result){
                res.json(result);
            } else{
                res.send("error");
            } 

        } catch (error) {
            console.log(error);
            res.json({err:true});
        }
    },

    async update(req,res){
        try {
            let data = await memoryModel.updateOne({_id:req.params.id},req.body);
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    },
    async aproveMemory(req,res){
        try {

            if(res.locals.userType == 'm'){
                let data = await memoryModel.updateOne({_id:req.params.id},{aprove: true});
                if(data){
                    res.send(data.acknowledged)
                } else{
                    res.send(false);
                } 
            }else{
                
                res.send("you have to be maneger")
            }
            
            
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async delete(req,res){
        try {
            let data = await memoryModel.deleteOne({_id:req.params.id});
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    }

}