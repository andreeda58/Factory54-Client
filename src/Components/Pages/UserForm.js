import TextField from '@mui/material/TextField';
import SelectBox from "../Ui/SelectBox"
import { useFormik } from "formik";
import userValidationSchema from '../../Validations/UserValidation';
import { useState } from 'react';
import UserMongoService from "../../Services/UserMongoService"
import UserSqlService from "../../Services/UserSqlService"
import { useNavigate } from "react-router";



const UserForm = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error,setError]=useState("");
    const id = Math.floor(Math.random() * 999999);

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            age: "",
            job: "",
            db: "",
        },
        validationSchema: userValidationSchema,
        onSubmit: async(values, { resetForm }) => {
            setTimeout(() => {
                setLoading(false);
                resetForm();
            }, 1000 * 2);

            try {

                if (values.db === "MongoDb") {
                   await UserMongoService.addUser({ id: id, name: values.name, lastName: values.lastName, age: values.age, job: values.job })
                }
                else {
                   await UserSqlService.addUser({ id: id, name: values.name, lastName: values.lastName, age: values.age, job: values.job })
                }
                navigate("/successPage");
            }
            catch(error){
                setError(error.message)
                return
            }
           
        },
    });

    if(error)return(<>
        <h1>{error}</h1>
        <h1>Please try again</h1>
    </>)

    return (
        <div className='container'>
            <h1 className='space'>Create New User</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        label="Name"
                        name='name'
                        className='space'
                    />
                </div>
                {formik.errors.name && (<label>{formik.errors.name ?formik.errors.name : ""}</label>)}
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        label="Last Name"
                        name='lastName'
                    />
                </div>
                {formik.errors.lastName && (<label>{formik.errors.lastName ?formik.errors.lastName : ""}</label>)}
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        type='number'
                        label="Age"
                        name='age'/>
                </div>
                {formik.errors.age && (<label>{formik.errors.age ?formik.errors.age : ""}</label>)}
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        label="Job"
                        name='job'/>
                </div>
                {formik.errors.job && (<label>{formik.errors.job ?formik.errors.job : ""}</label>)}
                <div>

                    <SelectBox
                        onChange={formik.handleChange}
                        className="form-select form-select-lg mb-3"
                        values={["Select a Db", "MongoDb"]}
                        name="db"
                    />
                </div>
                {formik.errors.db && (<label className='label1'>Please select a data base</label>)}
                <br />
                <button className='btn btn-info space'
                    disabled={loading}
                    type='submit'
                >{loading ? "Loading..." : "Submit"}</button>
            </form>

        </div>
    )
}

export default UserForm