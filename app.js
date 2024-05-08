const express=require("express");
const router = require("./routes/products");
const app=express();
const connectDB=require("./db/connect");

const PORT=process.env.PORT || 5000;
const products_routes=require("./routes/products");

app.get("/",(req,res)=>{
    res.send("Hi I m Love");

})

//middleware or to set router

app.use("/api/products",products_routes
);



const start=async()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`${PORT} yes I m Connected`);
        })

    }
    catch(error){
        console.log(error);
    }
}

start();