import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import axiosClient from '../config/axios';

// Components
import Patients from './Patients';
import NewDate from './NewDate';
import SingleDate from './SingleDate';


export default function Routes() {
    // App's state
    const [dates, setDates] = useState([]);
    const [request, setRequest] = useState(true);

    useEffect(() => {
        if (request) {
            const requestAPI = () => {
                axiosClient.get('/patients')
                    .then(resp => setDates(resp.data))
                    .catch(err => console.error(err));
            }
            requestAPI();
            setRequest(false);
        }
    }, [request]);

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={ () => <Patients dates={ dates } /> }/>
                <Route exact path="/addDate" component={ () => <NewDate setRequest={ setRequest } /> }/>
                <Route exact path="/date/:id" render={ (props) => {
                    const date = dates.filter(date => date._id === props.match.params.id);
                    return <SingleDate date={ date[0] } setRequest={ setRequest }/>; 
                } }/>
            </Switch>
        </Router>
    );
}