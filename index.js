import express from 'express'
import bodyparser from 'body-parser'
import database from './database.js'
import Schema from './userschema.js'

const app=express()

app.use(bodyparser.json())


app.get('/data',async(req,res)=>{

   const data= await Schema.find()
    res.send(data)
})

app.post('/add_data',async(req,res)=>{

    const data=req.body
    const add=new Schema({

        "userid":data.userid,
        "username":data.username,
        "password":data.password
        
    })

    
    await add.save()
    res.send("data added")

})


app.put('/modify/:userid',async(req,res)=>{

    const data=req.params.userid
    const newdata=req.body

    const existingdata=await Schema.findOne({userid:parseInt(data)})

    existingdata.userid=newdata.userid
    existingdata.username=newdata.username
    existingdata.password=newdata.password

   await existingdata.save()
   res.send("data modified")
   console.log(newdata)
   console.log(existingdata)

})

app.delete('/delete/:userid',async(req,res)=>{

    const data=req.params.userid
    const olddata=await Schema.findOneAndDelete({userid:parseInt(data)})
    res.send("data deleted")
})

app.listen(2000,()=>{
    database();
    console.log("server started")

})