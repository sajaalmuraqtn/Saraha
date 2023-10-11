import { generalFieldValidation } from '../../MiddleWare/validation.middleware.js'

export const profileSchema={
    file: generalFieldValidation.file.required()
}
