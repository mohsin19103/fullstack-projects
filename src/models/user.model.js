import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_KEY = "KEYFORDATA";
const TOKEN_EXPIRY = "1d";
const REFRESH_TOKEN = "REFRESH";
const REFRESH_EXPIRY = "10d";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  FullName: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String, // cloudnery url
    required: true,
  },
  coverImage: {
    type: String, // cloudnery url
  },
  watchHis: [
    {
      type: Schema.Types.ObjectId,
      ref: "video",
    },
  ],
  password: {
    type: String,
    required: [true, "password required"],
  },
  refreshToken: {
    type: String,
  },
}, { timestamps: true });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      Email: this.Email,
      userName: this.userName,
      FullName: this.FullName,
    },
    ACCESS_TOKEN_KEY,
    {
      expiresIn: TOKEN_EXPIRY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    REFRESH_TOKEN,
    {
      expiresIn: REFRESH_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);