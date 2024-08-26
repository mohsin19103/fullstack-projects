import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://mohsin19103:lovishboy@cluster0.72j9h.mongodb.net";
const DB_NAME = "videotube";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${MONGO_URL}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected at: ${connection.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
