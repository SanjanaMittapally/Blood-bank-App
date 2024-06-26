import React from 'react'
import { BiDonateBlood, BiUserCircle } from 'react-icons/bi'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.clear();
        alert("Logged Out Successfully");
        navigate("/login");
    };

    return (
        <div>
            <nav className='navbar'>
                <div className='container-fluid'>
                    <div className='navbar-brand h1'><BiDonateBlood color='red' />Blood Bank App</div>
                    <ul className='navbar-nav  flex-row'>
                        <li className='nav-item mx-3'>
                            <p className='nav-link'>

                                <BiUserCircle />&nbsp;Welcome {" "}
                                {user?.name || user?.hospitalName || user?.organisationName} {" "}
                                &nbsp;
                                &nbsp;
                                <span className='badge bg-secondary'>{user?.role}</span>
                            </p>
                        </li>

                        {user?.role === 'organisation' && (
                            (location.pathname === '/') ? (
                                <li className='nav-item mx-2'>
                                    <Link to='/analytics' className='nav-link'>
                                        Analytics
                                    </Link>

                                </li>
                            ) : (
                                (location.pathname === '/donar' || location.pathname === '/hospital') ? (
                                    <>
                                        <li className='nav-item mx-2'>
                                            <Link to='/analytics' className='nav-link'>
                                                Analytics
                                            </Link>

                                        </li>
                                        <li className='nav-item mx-3'>
                                            <Link to='/' className='nav-link'>
                                                Home
                                            </Link>
                                        </li>
                                    </>
                                ) : (<li className='nav-item mx-3'>
                                    <Link to='/' className='nav-link'>
                                        Home
                                    </Link>
                                </li>
                                )
                            )
                        )}

                        {user?.role === 'admin' && (
                            (
                                location.pathname === '/donar-list'
                                || location.pathname === '/hospital-list'
                                || location.pathname === '/org-list') ? (
                                <li className='nav-item mx-2'>
                                    <Link to='/' className='nav-link'>
                                        Home
                                    </Link>
                                </li>
                            ) : (null)
                        )}

                        {user?.role === 'donar' && (
                            (
                                location.pathname === '/donation' || location.pathname === '/organisation'
                            ) ? (
                                <li className='nav-item mx-2'>
                                    <Link to='/' className='nav-link'>
                                        Home
                                    </Link>
                                </li>
                            ) : (null)
                        )}

                        {user?.role === 'hospital' && (
                            (
                                location.pathname === '/consumer' || location.pathname === '/organisation'
                            ) ? (
                                <li className='nav-item mx-2'>
                                    <Link to='/' className='nav-link'>
                                        Home
                                    </Link>
                                </li>
                            ) : (null)
                        )}




                        <li className='nav-item mx-3'>
                            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;