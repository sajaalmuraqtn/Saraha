import bcrypt from 'bcryptjs'
import UserModel from "../../../../Connection/Models/User.model.js";
import  jwt  from 'jsonwebtoken';

export const signUp=async(req,res)=>{
    
      const {userName,email,password,age}=req.body
      const user= await UserModel.findOne({email:email});
       if (user) {
          return res.status(210).json({error:'email exist'});
      }else{
         const hashedPassword= bcrypt.hashSync(password,parseInt(process.env.SALTROUND))
         const createUser=await UserModel.create({userName,email,password:hashedPassword,age});
         return res.json({messages:'success',createUser});
      }
    
   }
   export const signIn=async(req,res)=>{
  
         const {email,password}=req.body;
         const user=await UserModel.findOne({email:email});
         if(!user){
            return res.json({error:'email invalid'});       
         }
         const isMach=await bcrypt.compareSync(password,user.password);
         if (!isMach) {
            return res.json({error:'data invalid'});       
         }
         const token=await jwt.sign({userId:user._id,userName:user.userName},process.env.tokenPass,{expiresIn:'1h'});
         return res.json({messages:'success',token});
   }