import { Fragment, useEffect, useState } from "react"
import Table from "../Ui/Table"
import UserSqlService from "../../Services/UserSqlService"
import UserOracleService from "../../Services/UserOracleService"


const ViewTables = () => {
    const [oracleData, setOracleData] = useState({});
    const [sqlData, setSqlData] = useState({});

    useEffect(() => {
        //sql
        UserSqlService.getAllUsers()
            .then((res) => res.json())
            .then((sqlJson) => setSqlData(sqlJson))


        //oracle
        UserOracleService.getAllUsers()
            .then((res) => res.json())
            .then((oracleJson) => setOracleData(oracleJson))


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



    return (

        <div className="container">

            {sqlData && (
                <Fragment className="items">
                    <h1>Oracle Table</h1>
                    <Table data={sqlData} config={config} keyFn={sqlData.id} />
                </Fragment>)}


            {oracleData && (
                <Fragment className="items">
                    <h1>Oracle Table</h1>
                    <Table data={oracleData} config={config} keyFn={oracleData.id} />
                </Fragment>
            )}
        </div>
    )
}

export default ViewTables

// data, config, keyFn 