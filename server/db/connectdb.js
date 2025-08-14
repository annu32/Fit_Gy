const mongoose=require("mongoose")

const connectdb=()=>{
    return mongoose.connect('mongodb://127.0.0.1:27017/Fitness_Tracker')

    .then(()=>{
        console.log("connected successfully")
    })
    .catch((error)=>{
        console.log(error)
    })
}

module.exports=connectdb