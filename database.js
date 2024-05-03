import mongoose from 'mongoose'

function database(){
    mongoose.connect("mongodb+srv://nagalakshmib48:Di8Yw5VOpBxNGP72@cluster0.grqjayp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}

mongoose.connection.on("connected",()=>{
    console.log("database connected")
})

mongoose.connection.on("error",(err)=>{
    console.log("database is not connected "+err)
})

export default database;