import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
const app = express();
const CORS_ORIGINE="*"
app.use(cors({
  origin: CORS_ORIGINE,
  // credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}