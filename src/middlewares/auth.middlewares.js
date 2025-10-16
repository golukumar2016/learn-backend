import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import jwt from "jsonwebtoken"
import { User } from "../models/user.model";


export const verifyJWT = asyncHandler(async (req, _, next)=>{ // if responce has no work then we can write in place of res _
  try {
    const totken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer", "")
  
    if (!token) {
      throw new ApiError(401, "Unauthorized request")
    }
  
    const decodedToken = jwt.verify(token, proccess.env.ACCESS_TOKEN_SECRET);
  
    const user = await User.findById(decodedToken?._id).select("-password -refreshToken")
  
    if(!user){
      throw new ApiError(4001, "Invalid Access Token")
    }
  
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token")
  }
})