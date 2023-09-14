import TextField from '@mui/material/TextField';
import SelectBox from "../Ui/SelectBox"
import { useFormik } from "formik";
import userValidationSchema from '../../Validations/UserValidation';
import { useState } from 'react';
import UserSqlService from "../../Services/UserSqlService"
import UserMongoService from "../../Services/UserMongoService"
import { useNavigate } from "react-router";


const UserForm = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            lastName: "",
            age: "",
            job: "",
            db: "",
        },
        validationSchema: userValidationSchema,
        onSubmit: (values, { resetForm }) => {
            console.log(values);

       //     values.db==="oracle"?UserOracleService.addUser(values.name,values.lastName,values.job,values.age)
        //    :UserSqlService.addUser(values.name,values.lastName,values.job,values.age)

            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                resetForm();
            }, 1000 * 2);

            navigate("/successPage");
        },
    });



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
                        helperText={formik.errors.name ? formik.errors.name : ""}

                    />
                </div>
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        label="Last Name"
                        name='lastName'
                        helperText={formik.errors.lastName ? formik.errors.lastName : ""}

                    />
                </div>
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        type='number'
                        label="Age"
                        name='age'
                        helperText={formik.errors.age ? formik.errors.age : ""} />
                </div>
                <div>
                    <TextField
                        onChange={formik.handleChange}
                        id="outlined-required"
                        label="Job"
                        name='job'
                        helperText={formik.errors.job ? formik.errors.job : ""} />
                </div>
                <div>

                    <SelectBox
                        onChange={formik.handleChange}
                        label="Job"
                        className="form-select form-select-lg mb-3"
                        values={["Select DB", "oracle", "sql"]}
                        name="db"
                    />
                    {formik.errors.job && (<label>Please select a data base</label>)}
                </div>

                <button className='btn btn-info space'
                    disabled={loading}
                    type='submit'
                >{loading ? "Loading..." : "Submit"}</button>
            </form>

        </div>
    )
}

export default UserForm