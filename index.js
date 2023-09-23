import * as dotenv from 'dotenv'
import express from 'express'
import initApp from './Src/app.router.js';
import connectDB from './Connection/Connection.js';
dotenv.config();
 const app =express();
 connectDB();
 initApp(app,express);

 app.listen(parseInt(process.env.Port),()=>{
    console.log('server is running in 4000');
 })