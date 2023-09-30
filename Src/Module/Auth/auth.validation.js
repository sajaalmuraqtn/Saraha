import joi from 'joi'

export const signUpSchema ={
body:joi.object( {userName:joi.string().required().min(3).max(20),
        email:joi.string().email().required(),
        password:joi.string().min(8).required().messages({
            "string.min":"password must be at least 8 char"
        }),
        cPassword:joi.valid(joi.ref('password')).required(),
        gender:joi.string().valid('Male','Female'),
        age:joi.number().integer().min(18).max(90)
})}
export const signInSchema = joi.object({
   
        email:joi.string().email().required(),
        password:joi.string().min(8).required().messages({
            "string.min":"password must be at least 8 char",
        })
})
