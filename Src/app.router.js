import AuthRouter from './Module/Auth/Auth.router.js'
import MessagesRouter from './Module/Messages/Messages.router.js'
import UserRouter from './Module/User/User.router.js'
const initApp=(app,express)=>{
    app.use(express.json());

    app.use('/Auth',AuthRouter);
    app.use('/',UserRouter);
    app.use('/Messages',MessagesRouter);
    app.use('*',(req,res)=>{
        return res.json({message:'page not found'});
    })
}
export default initApp;