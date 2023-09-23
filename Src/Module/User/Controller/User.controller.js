import UserModel from "../../../../Connection/Models/User.model.js";

export const getUsers=(req,res)=>{
    
        return res.json({message:'users success'})
    
}

export const profile=async(req,res)=>{

        const user =await UserModel.findOne({_id:req.userId})
        return res.json({user:user});
  
}
