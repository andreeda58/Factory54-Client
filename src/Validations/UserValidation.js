import { object, string, number  } from 'yup';

const userValidationSchema = object().shape({
    name: string().required(),
    lastName: string().required(),
    age: number().required().positive().integer(),
    job: string().required(),
    db:string().required(),
});

export default userValidationSchema;