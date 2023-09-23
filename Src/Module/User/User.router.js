import express from 'express'
import * as UserController from './Controller/User.controller.js'
import  {auth}  from '../../MiddleWare/auth.middleware.js';
import { asyncHandler } from '../../MiddleWare/errorHandling.middleware.js';
const app=express();

app.get('/Users',asyncHandler(UserController.getUsers));
app.get('/profile',auth,asyncHandler(UserController.profile));
export default app;