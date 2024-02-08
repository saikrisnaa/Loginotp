const mongoose = require("mongoose");

const dbase = process.env.DATABASE;

mongoose.connect(dbase,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected"))
.catch((error)=>{
    console.log("error",error);
})