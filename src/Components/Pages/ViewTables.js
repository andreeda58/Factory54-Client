import { useEffect, useState } from "react"
import Table from "../Ui/Table"
import UserMongoService from "../../Services/UserMongoService"

const ViewTables = () => {
    //const [oracleData, setOracleData] = useState({});
    const [mongoData, setMongoData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const {data} = await UserMongoService.getAllUsers();

                return { 
                    ok: true, 
                    data: data
                }
            }
            catch (error) {

                const {message}=error;
               
                return {
                    ok: false,
                    err: message
                }
            }

        }
        const {ok, data} = fetchData();

        if(!ok) return
        else setMongoData(data);


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

            {mongoData && (
                <div className="items">
                    <h1>Mongo Table</h1>
                    <Table data={mongoData} config={config} keyFn={keyFn} />
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