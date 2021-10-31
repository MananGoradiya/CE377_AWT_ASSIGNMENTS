const mongoose=require("mongoose");
const dbConnection=require('./database');
const validator=require("validator");
//const manan=require('./database/');
//console.log(dbConnection.manan);
/*
if(dbConnection.dbConnection)   
{
    console.log("yesss");
}
*/


const schema=new mongoose.Schema({
    courseId:{
        type:String,
        require:true
       
    },

    courseName:{
        type:String,
        require:true
        
    },
    departmentName:{
        type:String,
        require:true
        
    },
    instituteName:{
        type:Array,
        require:true
    },
    universityName:{
        type:String,
        require:true
    }
    
})


const demoschema=new mongoose.model("uniSchema",schema);
module.exports=demoschema;