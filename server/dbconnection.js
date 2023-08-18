const mongoose= require('mongoose');

const mongoDb= "db_name";

mongoose.connect(mongoDb,{
    useNewUrlParser:true,    
    useUnifiedTopology:true
}).then(()=>console.log("connected...")).catch((err)=>{
    console.log(`connection failed ${err}`);
});

module.exports= mongoose;