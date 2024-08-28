import mongoose,{Schema, schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema= new schema({
  userName:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
  },
  Email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    
  },
  FullName:{
    type:String,
    required:true,
    trim:true,
    index:true
  },
  avatar:{
    type:String,//cloudnery url
    required:true,
   
  },
  coverImage:{
    type:String,//cloudnery url
  },
  watchHis:[
    {
      type:Schema.Types.ObjectId,
      ref:"video"
    }
  ],
  
password:{
  type:String,
  required:[true,"password require"]
},
refreshToken:{
  type:String
}
},

  {timestamps:true

})
userSchema.pre("save",async function (next){
  if((!this.isModified("password"))) return next()
  this.password=bcrypt.hash(this.password,10)
  next()
})
userSchema.methods.isPasswordCorrect= async function (password){
 return await bcrypt.compare(password,this.password)
}
export const User = mongoose.model("User",userSchema)