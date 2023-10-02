import  express from 'express'
import * as MessagesController from './Controller/Messages.controller.js'
import { asyncHandler } from '../../MiddleWare/errorHandling.middleware.js';
import { auth } from '../../MiddleWare/auth.middleware.js';
const app=express();

app.post('/:receiverId',asyncHandler(MessagesController.sendMessages));
app.get('/',auth,asyncHandler(MessagesController.getMessages));

export default app; 