const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./routers/productRouter')
const userRouter = require('./routers/userRouter')
const jwt = require('jsonwebtoken')
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express()
app.get('/',(req,res)=>{
    res.send("Welcome to Products Pages")
})

app.use(cors());
app.use(express.json());

app.post('/login',(req,res)=>{
    //Authenticate

    //Token creation
    const username = req.body.username
    const user ={name:username}
    const secretKey = process.env.JWT_SECRET_KEY
    const token = jwt.sign(user,secretKey)
    res.json({accesstoken:token})
})

app.use('/products',productRouter)
app.use('/users',userRouter)

const mongourl = process.env.MONGODB_URL
async function main(){
    await mongoose.connect(mongourl);
}

main()
.then(()=>console.log("Database connected"))
.catch(err => console.log(err));

const ProductData = require('./models/Product')


const port = process.env.PORT
app.listen(port,()=>{
    console.log("Server started....")
})
