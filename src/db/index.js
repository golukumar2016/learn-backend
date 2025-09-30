import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const ConnectDB = async () =>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(`\n mongoBd connected !! DB HOST:${connectionInstance.connection.host}`);
  } catch (error) {
      console.log("MONGODB CONNECTION failed ", error );
      process.exit(1); // use for exit from pocess when got error 
  }
}

export default ConnectDB;