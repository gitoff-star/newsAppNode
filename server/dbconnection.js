const mongoose= require('mongoose');

const mongoDb= "mongodb://0.0.0.0:27017/sampleDb";

mongoose.connect(mongoDb,{
    useNewUrlParser:true,    
    useUnifiedTopology:true
}).then(()=>console.log("connected...")).catch((err)=>{
    console.log(`connection failed ${err}`);
});

module.exports= mongoose;