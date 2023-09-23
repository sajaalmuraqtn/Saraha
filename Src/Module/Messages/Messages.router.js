import  express from 'express'
import * as MessagesController from './Controller/Messages.controller.js'
import { asyncHandler } from '../../MiddleWare/errorHandling.middleware.js';
const app=express();

app.get('/',asyncHandler(MessagesController.getMessages));

export default app; 