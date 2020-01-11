const express = require('express')
const patientController = require('../controllers/patientController');

const router = express.Router();



module.exports = function () {
    // Add new patients by HTTP POST
    router.post('/patients', 
        patientController.newPatient
    );

    router.get('/patients',
        patientController.getAllPatients
    );

    router.get('/patient/:id',
        patientController.getPatient
    );

    router.put('/patient/:id',
        patientController.updatePatient
    );
    
    router.delete('/patient/:id',
        patientController.deletePatient
    );

    return router;
}