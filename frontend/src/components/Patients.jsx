import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


export default function Patients({ dates }) {
    if (dates.length === 0) return null;
    return (
        <Fragment>
            <h1 className="my-5">Patients Manager</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to='/addDate' className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Create Date</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            { dates.map(date => (
                                <Link to={`/date/${ date._id }`} key={ date._id } className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{ date.name }</h3>
                                        <small className="fecha-alta">{ date.date } - { date.time }</small>
                                    </div>
                                    <p className="mb-0">{ date.symptoms }</p>
                                    <div className="contacto py-3">
                                        <p>Owner: { date.owner }</p>
                                        <p>{ date.phone }</p>
                                    </div>
                                </Link>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}