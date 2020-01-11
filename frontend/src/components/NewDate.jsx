import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axiosClient from '../config/axios';

function NewDate({ history, setRequest }) {
    const [date, setDate] = useState({
        name: '',
        owner: '',
        date: '', 
        time: '',
        phone: '',
        symptoms: ''
    });

    const updateState = e => {
        setDate({
            ...date,
            [e.target.name]: e.target.value
        });
    }

    const createNewDate = e => {
        e.preventDefault();

        axiosClient.post('/patients', date)
            .then(resp => {
                setRequest(true);
                history.push('/');
            })
            .catch(err => console.error(err));   
    }

    return (
        <Fragment>
            <h1 className="my-5">Create a new Date</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to='/' className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Return</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <form className="bg-white p-5 bordered" onSubmit={ createNewDate }>
                            <div className="form-group">
                                <label htmlFor="nombre">Pet's Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nombre" 
                                    name="name" 
                                    placeholder="Pet's Name" 
                                    onChange={ updateState }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="propietario">Owner's Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="propietario" 
                                    name="owner" 
                                    placeholder="Owner's Name"
                                    onChange={ updateState }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Phone</label>
                                <input 
                                    type="tel" 
                                    className="form-control form-control-lg" 
                                    id="telefono" 
                                    name="phone" 
                                    placeholder="Phone"
                                    onChange={ updateState }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fecha">Date</label>
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    id="fecha" 
                                    name="Date" 
                                    onChange={ updateState }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Time</label>
                                <input 
                                    type="time" 
                                    className="form-control form-control-lg" 
                                    id="hora" 
                                    name="time"
                                    onChange={ updateState }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="sintomas">Symptoms</label>
                                <textarea 
                                    className="form-control" 
                                    name="symptoms" 
                                    rows="6"
                                    onChange={ updateState }
                                ></textarea>
                            </div>


                            <input type="submit" className="btn btn-primary mt-3 w-100 p-3 text-uppercase font-weight-bold" value="Crear Cita"  />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(NewDate);