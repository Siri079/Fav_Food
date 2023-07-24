const mongoose=require("mongoose");
mongoose
    // .connect('mongodb://127.0.0.1:27017/food-app', {useNewUrlParser:true})
     .connect('mongodb+srv://admin:l8PwRaDfGMVfNywF@cluster0.fa7awu3.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser:true})
    .catch(e=>{
        console.error('connection error', e.message);
    })

const db=mongoose.connection;
module.exports=db;
