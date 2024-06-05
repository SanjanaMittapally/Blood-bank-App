import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { useSelector } from 'react-redux'

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);

    return (

        <Layout>
            {(user?.role === 'admin') ? (
                <div className="container d-flex justify-content-center"
                    style={{ height: '100vh' }}>
                    <div className="mt-4 ">
                        <h1>
                            Welcome Admin <i className='text-success'>{user?.name}</i>
                        </h1>
                        <h3 className='text-center'>Manage Blood Bank App</h3><hr />

                        <div className="container mt-5 d-flex justify-content-center">
                            <div className="card" style={{ width: '36rem', height: '28rem' }}>
                                <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765" className="card-img-top" alt="Admin Dashboard" />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Welcome to Admin Dashboard</h5>
                                    <p className="card-text text-center">Manage donors, blood inventory and hospitals</p>
                                    <p className="card-text text-center">.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)
            }
        </Layout>
    )

}

export default AdminHome;