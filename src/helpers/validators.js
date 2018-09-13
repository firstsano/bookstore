import validator from 'validator';


export const validateEmail = (values, fields) => {
    const validateCallback = value => !validator.isEmail(value);
    return validate(values, fields, validateCallback, 'не верный адрес почты');
};

export const validateRequired = (values, fields) => {
    return validate(values, fields, validator.isEmpty, 'обязательное поле');
};

export const validatePhone = (values, fields) => {
    const validateCallback = value => !validator.isMobilePhone(value, 'ru-RU');
    return validate(values, fields, validateCallback, 'не верный номер телефона');
};

const validate = (values, fields, validator, message) => {
    const errors = {};
    // validator work only with strings
    const validationCallback = (value = '') => validator(value);
    for(let field of fields) {
        if (validationCallback(values[field])) {
            errors[field] = `${field}: ${message}`;
        }
    }
    return errors;
};