/*
// for use dotenv as import we have to do thats
import dotenv from "dotenv"
dotenv.config({
  path:'./env'
})

//then on package.json 
"scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  },*/

import dotenv from "dotenv";



import ConnectDB from "./db/index.js";

import express from "express";
const app = express();


dotenv.config({
  path:'./env'
})


ConnectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at prot : ${process.env.PORT}`);
  })
}).catch((err)=>{
  console.log('MONGO DB connection failed !!! ', err);
})








/*
// for connecting database
(async () => {
  try{
    await mongoose.connect(`${process.env.MONGODG_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
      console.log("ERROR: ", error);
      throw error
    })

    app.listen(process.env.PORT, ()=>{
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  }catch(error){
      console.error("ERROR: ", error)
      throw error
    }
  
})()
 */