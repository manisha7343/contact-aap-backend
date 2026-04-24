const { body, validationResult} = require("express-validator");

const UpdateUserValidationRules = [

    body('first_name')
        .optional()
        .isString().withMessage("firstName must be a String!")
        .bail()
        .matches(/^[A-Za-z ]+$/).withMessage('Name must contain only letters')
        .bail()
        .isLength({ min:2, max: 14}).withMessage("firstName must be between 2-14 chars")
        .trim()
    ,

    body('last_name')
        .optional()
        .isString().withMessage('fisrtName is required!')
        .bail()
        .matches(/^[A-Za-z]+$/).withMessage('Name must contain only letters')
        .bail()
        .isLength({ min:2, max:14}).withMessage('lastName must be a string')
        .trim()
    ,
    
    body().custom(( _ , { req }) => {
    if (Object.keys(req.body).length === 0) {
        throw new Error("At least one field is required to update");
    }
    return true;
    })

]

const validate =  (req, res, next) =>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            success:false,
            errors : errors.array().map(err => err.msg)
        })
    }

    next();

}

module.exports = {

 UpdateUserValdation:  [...UpdateUserValidationRules, validate]

}
