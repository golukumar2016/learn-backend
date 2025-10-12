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

import connectDB from "./db/index.js";
import {app} from './app.js'

dotenv.config({
  path:'./.env'
})


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 3000, ()=>{
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