import express from 'express'
import * as UserController from './Controller/User.controller.js'
import  {auth}  from '../../MiddleWare/auth.middleware.js';
import { asyncHandler } from '../../MiddleWare/errorHandling.middleware.js';
import fileUpload, { fileValidation } from '../../Services/multer.js';
import validation from '../../MiddleWare/validation.middleware.js';
import { profileSchema, updatePasswordSchema } from './User.validation.js';
const app=express();

app.get('/Users',asyncHandler(UserController.getUsers));
app.get('/profile',fileUpload(fileValidation.image).single('image'),validation(profileSchema),auth,asyncHandler(UserController.profile));
app.get('/profile',fileUpload(fileValidation.pdf).single('pdf'),auth,asyncHandler(UserController.profile));
app.patch('/updatePassword',auth,validation(updatePasswordSchema),asyncHandler(UserController.updatePassword));
export default app;