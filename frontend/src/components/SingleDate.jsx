import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

function SingleDate({ date: { _id, name, owner, date, time, phone, symptoms }, history, setRequest }) {
    if (!_id) {
        history.push('/');
        return null;
    }

    const deleteDate = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                axiosClient.delete(`/patient/${ id }`)
                    .then(resp => {
                        setRequest(true);
                        history.push('/');
                    })
                    .catch(err => console.error(err));
            }
        });        
    }

    return (
        <Fragment>
            <h1 className="my-5">Name: { name } </h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to='/' className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Return</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{ name }</h3>
                                    <small className="fecha-alta">{ date } - { time }</small>
                                </div>
                                <p className="mb-0">{ symptoms }</p>
                                <div className="contacto py-3">
                                    <p>Owner: { owner }</p>
                                    <p>Phone: { phone }</p>
                                </div>
                                <div className="">
                                    <button 
                                        type="button" 
                                        className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                        onClick={ () => deleteDate(_id) }
                                    >Eliminar &times;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter(SingleDate);