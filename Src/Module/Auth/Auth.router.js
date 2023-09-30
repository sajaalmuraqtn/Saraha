import express from 'express'
import * as AuthController from './Controller/Auth.controller.js'
import { asyncHandler } from '../../MiddleWare/errorHandling.middleware.js';
import { signInSchema, signUpSchema } from './auth.validation.js';
import validation from '../../MiddleWare/validation.middleware.js';
const app=express();

app.post('/signUp', validation(signUpSchema),asyncHandler( AuthController.signUp))
app.post('/signIn', validation(signInSchema),asyncHandler(AuthController.signIn))
app.get('/confirmEmail/:token',asyncHandler(AuthController.confirmEmail))
app.get('/newConfirmEmail/:RefreshToken',asyncHandler(AuthController.newConfirmEmail))

export default app;