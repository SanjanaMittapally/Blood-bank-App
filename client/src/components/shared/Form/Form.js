import React, { useState } from 'react';
import InputType from "./InputType";
import { Link } from 'react-router-dom';
import { handleLogin, handleRegister } from '../../../services/authService.js';

const Form = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("donar");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <>
            <form onSubmit={(e) => {
                if (formType === 'login') {
                    return handleLogin(e, email, password, role);
                }
                else if (formType === 'register') {
                    return handleRegister(e, name, role, email, password, organisationName, hospitalName, phone, website, address);
                }
            }}>
                <h1 className="text-center">{formTitle}</h1>
                <hr />
                <div className="d-flex mb-3">
                    <div className="form-check ms-2">
                        <input
                            className="form-check-label"
                            type="radio"
                            name="role"
                            value={'donar'}
                            id="donarRole"
                            onClick={(e) => { setRole(e.target.value) }}
                            defaultChecked
                        />
                        <label htmlFor='donarRadio' className='form-check-label'>
                            Donar
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            className="form-check-label"
                            type="radio"
                            name="role"
                            value={'admin'}
                            id="adminRole"
                            onClick={(e) => { setRole(e.target.value) }}
                        />
                        <label htmlFor='adminRadio' className='form-check-label'>
                            Admin
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            className="form-check-label"
                            type="radio"
                            name="role"
                            value={'hospital'}
                            id="hospitalRole"
                            onClick={(e) => { setRole(e.target.value) }}
                        />
                        <label htmlFor='hospitalRadio' className='form-check-label'>
                            Hospital
                        </label>
                    </div>
                    <div className="form-check ms-2">
                        <input
                            className="form-check-label"
                            type="radio"
                            name="role"
                            value={'organisation'}
                            id="organisationRole"
                            onClick={(e) => { setRole(e.target.value) }}
                        />
                        <label htmlFor='organisationRadio' className='form-check-label'>
                            Organistaion
                        </label>
                    </div>
                </div>

                {(() => {
                    //eslint-disable-next-line
                    switch (true) {
                        case formType === 'login': {
                            return (
                                <>
                                    <InputType
                                        labelText={'Email'}
                                        labelFor={'forEmail'}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={'Password'}
                                        labelFor={'forpassword'}
                                        inputType={'text'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </>
                            )
                        }
                        case formType === 'register': {
                            return (
                                <>
                                    {(role === 'donar' || role === 'admin') && (
                                        <InputType
                                            labelText={'Name'}
                                            labelFor={'forName'}
                                            inputType={'text'}
                                            name={'name'}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    )}
                                    <InputType
                                        labelText={'Email'}
                                        labelFor={'forEmail'}
                                        inputType={'email'}
                                        name={'email'}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={'Password'}
                                        labelFor={'forpassword'}
                                        inputType={'password'}
                                        name={'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {role === 'organisation' && (
                                        <InputType
                                            labelText={'Organisation Name'}
                                            labelFor={'organisationName'}
                                            inputType={'text'}
                                            name={'organisationName'}
                                            value={organisationName}
                                            onChange={(e) => setOrganisationName(e.target.value)}
                                        />
                                    )}

                                    {role === 'hospital' && (
                                        <InputType
                                            labelText={'Hospital Name'}
                                            labelFor={'hospitalName'}
                                            inputType={'text'}
                                            name={'hospitalName'}
                                            value={hospitalName}
                                            onChange={(e) => setHospitalName(e.target.value)}
                                        />
                                    )}
                                    <InputType
                                        labelText={'Website'}
                                        labelFor={'website'}
                                        inputType={'text'}
                                        name={'website'}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    <InputType
                                        labelText={'Address'}
                                        labelFor={'address'}
                                        inputType={'text'}
                                        name={'address'}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <InputType
                                        labelText={'Phone'}
                                        labelFor={'phone'}
                                        inputType={'text'}
                                        name={'phone'}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </>
                            )
                        }
                    }
                })()}

                <div className="d-flex flex-row justify-content-between">
                    {formType === "login" ? (
                        <p>
                            Not registered yet ? Register
                            <Link to="/register" > Here !</Link>
                        </p>
                    ) : (
                        <p>
                            Already a User Please
                            <Link to="/login" > Login !</Link>
                        </p>
                    )}
                    <button type="submit" className="btn btn-primary">
                        {submitBtn}
                    </button>
                </div>

            </form>

        </>
    );
}

export default Form;