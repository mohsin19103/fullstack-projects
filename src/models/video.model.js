import mongoose, { Schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema= new Schema({
  videoFile:{
    type:String,
    required:true,

  },
  thumbnail:{
    type:String,
    required:true,
  },
  titile:{
    type:String,
    required:true,
  },
  discreption:{
    type:String,
    required:true,
  },
  duration:{
    type:Number,
    required:true,
  },
  views:{
    type:Number,
    default:0,
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }

},{timestamps:true})
videoSchema.plugin(mongooseAggregatePaginate)
export const Video =mongoose.model("Video",videoSchema)