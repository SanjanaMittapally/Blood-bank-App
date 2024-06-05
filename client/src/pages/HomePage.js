import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner';
import Layout from '../components/shared/Layout/Layout';
import Modal from '../components/shared/modal/Modal';
import API from '../services/API';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { loading, error, user } = useSelector(state => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();


  const getBloodRecords = async () => {
    try {
      const { data } = await API.get('/inventory/get-inventory');
      if (data?.success) {
        setData(data?.inventory);
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
    <Layout>
      {user?.role === 'admin' && navigate('/admin')}
      {user?.role === 'donar' && navigate('/donation')}
      {user?.role === 'hospital' && navigate('/consumer')}
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (


        <>
          {user?.role === 'organisation' && (
            <div className="container">

              <div className="container">
                <div className="m-2 p-2 d-inline-block" style={{ backgroundColor: "#B0EBB4", borderRadius: '2%' }}>
                  <h4
                    className='ms-1'
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{ cursor: "pointer" }}
                  >
                    <i className='fa-solid fa-plus text-success '></i>

                    Add Inventory
                  </h4>
                </div>
              </div>

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
                  {data?.map((record) => (
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

              <Modal />
            </div>
          )
          }
        </>
      )
      }
    </Layout >
  );
};

export default HomePage;