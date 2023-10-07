import UserModel from "../../../../Connection/Models/User.model.js";
import cloudinary from "../../../Services/cloudinary.js";

export const getUsers=(req,res)=>{
    
        return res.json({message:'users success'})
    
}

export const profile=async(req,res)=>{
        const cloud= await cloudinary.uploader.upload(req.file.path,{
                folder:`${process.env.APP_NAME}/user/${req.user._id}/profile`
        })
        const {secure_url} = cloud;
        const user =await UserModel.findByIdAndUpdate(req.user._id,{profilePic:secure_url});
        return res.json({message:"profile image updated",Image:secure_url});
  
}
