import mongoose, { Schema } from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
  {
    username:{
      type: String,
      required : true,
      unique : true,
      lowercase:true,
      trim: true,
      index: true  // index is use for better serching schem
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    fullName: {
      type: String,
      required: true,
      index: true,
      trim: true
    },
    avatar: {
      type: String, //cloudinary url
      required : true,
    },
    coverImage:{
      type: String
    },
    watchHistory:[
      {
        type: Schema.Types.ObjectId,
        ref: "Video"
      }
    ],
    password:{
      type: String,
      required: [true, 'Password is required']
    },
    refresTiken: {
      type:String
    }
  },
  {timestamps:true}
)
userSchema.pre("save", async function (next){ // means before save this data you have run this
  if(!this.isModified("password")) return next(); //this.isModified is a method which return boolen value is modified or not

  this.password = bcrypt.hash(this.password, 10)  // make this in hash in 10 rounds to encode passord
  next()
})


userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password) // bcrypt.compare is a method in which get password and encode password compare
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id:this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName
    }, 
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.method.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}
export const User = mongoose.model("User", userSchema);