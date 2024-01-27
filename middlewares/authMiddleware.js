const asyncHandlers = require('../utils/asyncHandlers');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const ApiError = require('../utils/apiError');


const verifyJWT = asyncHandlers(async (req,res,next)=>{
    try {
        const token  = req.cookies.accessToken || req.header('Authorization')?.replace('Bearer' , "")

        if(!token){
            throw new ApiError(401 , "Unauthrized request");
        }

        const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decodedToken?._id).select('-password -refreshToken')

        if(!user){
            throw new ApiError(401 , 'Invalid token')
        }
        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401 ,error?.message ||  'Invalid token')
    }
})


module.exports = verifyJWT;
