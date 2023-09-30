const dataMethod = ['body', 'headers', 'query', 'params'];
const validation = (Schema) => {
    try {
 return (req, res, next) => {
        const validationArray = [];
      
        dataMethod.forEach((key) => {
            if (Schema[key]) {
                const validationResult = Schema[key].validate(req[key], { abortEarly: false });
                if (validationResult.error) {
                    validationArray.push(validationResult.error.details)
                }
            }
        });

        if (validationArray.length > 0) {
            return res.status(400).json({ error: "validation error", validationArray });
        } else {
         next()
        }
    } } catch (error) {
        return res.json({message:'catch error',error:error.stack})
    }
}
export default validation;