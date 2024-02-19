const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://projectx061:projectbca24@cluster0.n4wn0ea.mongodb.net/")
.then( () => {
    console.log("mongodb connected");

})
.catch(()=>{
    console.log('err');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const collection=mongoose.model("collection",newSchema)


module.exports=collection