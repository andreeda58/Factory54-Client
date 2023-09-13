import { useNavigate } from "react-router";

const SuccessPage=()=>{

    const navigate=useNavigate();

    return(<>
    <h1> The user has been added successfully</h1>
    <button className='btn btn-info space' onClick={()=>navigate("/addUser")}>Add New User</button>
    </>)
}


export default SuccessPage;