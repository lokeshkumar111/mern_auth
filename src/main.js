const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors());

// this is our login page
app.get("/", cors(), (req,res)=>{

})

app.post("/", async(req, res)=>{
    const{email, password} = req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("already exist");
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
        console.log("not exist");
    }
})


app.post("/signup", async(req, res)=>{
    const{email, password} = req.body

    const data = {
        email:email,
        password:password
    }


    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("already exist");
        }
        else{
            res.json("not exist")
            await collection.insertMany([data]);

        }
    }
    catch(e){
        console.log("not exist");
    }
})

app.listen(8000,()=>{
    console.log("port connected")
})