import {  useEffect, useState } from "react"
import Table from "../Ui/Table"
import UserMongoService from "../../Services/UserMongoService"

const ViewTables = () => {
    //const [oracleData, setOracleData] = useState({});
    const [sqlData, setSqlData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            var users = await  UserMongoService.getAllUsers();

            console.log(users);
            setSqlData(users?.data)
        }

        setTimeout(() => {
            fetchData();
        }, 100);

    }, [])


    const config = [
        {
            label: 'Name',
            render: (data) => data.name,
        },
        {
            label: 'Last Name',
            render: (data) => data.lastName,
        },
        {
            label: 'Age',
            render: (data) => data.age,
        },

        {
            label: 'Job',
            render: (data) => data.job,
        },
    ];

    const keyFn = (data) => {
        return data.id;
    };



    return (

        <div className="container">

            {sqlData && (
                <div className="items">
                    <h1>Oracle Table</h1>
                    <Table data={sqlData} config={config} keyFn={keyFn} />
                </div>)}

            {/* {oracleData && (
                <Fragment className="items">
                    <h1>Oracle Table</h1>
                    <Table data={oracleData} config={config} keyFn={oracleData.id} />
                </Fragment>
            )} */}
        </div>
    )
}

export default ViewTables

// data, config, keyFn 