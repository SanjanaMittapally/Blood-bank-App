import React, { useEffect, useState } from 'react'
import API from '../../services/API';
import Header from '../../components/shared/Layout/Header';
import moment from 'moment';

const Analytics = () => {
    const [data, setData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);

    const colors = ["#FFF9D0", "#CAF4FF", "#A0DEFF", "#5AB2FF", "#AF8F6F", "#B0EBB4", "#C39898", "#8E3E63"];

    const getBloodGroupData = async () => {
        try {
            const { data } = await API.get('/analytics/bloodGroups-data');
            if (data?.success) {
                setData(data?.bloodGroupData);
                //console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodGroupData();
    }, []);

    const getBloodRecords = async () => {
        try {
            const { data } = await API.get('/inventory/get-recent-inventory');
            if (data?.success) {
                setInventoryData(data?.inventory);
                //console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getBloodRecords();
    }, []);




    return (
        <>
            <Header />
            <div className='d-flex flex-row flex-wrap'>
                {data?.map((record, i) => (
                    <div className="card m-2 p-1"
                        key={i}
                        style={{ width: '18rem', backgroundColor: `${colors[i]}` }}>

                        <div className="card-body">
                            <h5 className="card-title bg-light text-dark text-center ">
                                {record.bloodGroup}
                            </h5>
                            <p className="card-text">
                                Total In: <b>{record.totalIn}</b> (ML)
                            </p>
                            <p className="card-text">
                                Total Out: <b>{record.totalOut}</b> (ML)
                            </p>
                        </div>
                        <div className="card-footer text-light bg-dark text-center">
                            TotalAvailable: <b>{record.availableBlood}</b> (ML)
                        </div>
                    </div>

                ))}

            </div>
            <div className="container my-3">
                <h1 className='my-3 text-center'>Recent Blood Transactions</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Donar Email</th>
                            <th scope="col">Time & Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData?.map((record) => (
                            <tr key={record._id}>
                                <td>{record.bloodGroup}</td>
                                <td>{record.inventoryType}</td>
                                <td>{record.quantity} (ML)</td>
                                <td>{record.email}</td>
                                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Analytics;