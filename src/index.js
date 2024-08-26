import express from 'express';
import connectDB from './db/index.js';

connectDB();










/*
(async ()=>{
try {
 await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
 app.on("error",(error)=>{
  console.log("ERROR:", error)
  throw error
 })
 app.listen(process.env.PORT,()=>{
  console.log(`app is listeng on ${process.env.PORT}`)
 })
}
catch(error){
  console.error("ERROR:",error)
  throw err
}
})() */