import MessageModel from "../../../../Connection/Models/Message.model.js";
import UserModel from "../../../../Connection/Models/User.model.js";

export const getMessages=async(req,res)=>{
  
 let messageList= await MessageModel.find({receiverId:req.user._id})
  return res.json({message:'success',messageList:messageList})
}

export const sendMessages=async(req,res)=>{
  const {receiverId}=req.params;
  const {message}=req.body;
  const user=await UserModel.findOne({_id:receiverId});
  if (!user) {
    return res.status(404).json({message:"user not found"});
  }
  const createMessage=await MessageModel.create({message,receiverId});
  
    return res.status(201).json({message:"success"});
  
}