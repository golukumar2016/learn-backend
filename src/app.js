import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
  origin: process.env.CORS-ORIGIN,
  credentials:true
}))

app.use(express.json({limit: "16kb"})) //limit is use for size of json format data so server has no load by my big data

app.use (express.urlencoded({extended:true, limit:"16kb"})) // use for url type work

app.use(express.static("public"))  // use for store static thing like images etc

app.use(cookieParser()); // use for cookie related thing 

export {app };