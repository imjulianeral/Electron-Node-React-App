const Patients = require('../models/Patient');

// When a client is created
exports.newPatient = async (req, res, next) => {
    const patients = new Patients(req.body);

    try {
        await patients.save();
    } catch (error) {
        console.error(error);
        next();
    }

    res.json({ msg: 'The client was successfully added' });
}

exports.getAllPatients = async (req, res, next) => {
    try {
        const patients = await Patients.find();
        res.json(patients);
    } catch (error) {
        console.error(error);
        next();
    }
}

exports.getPatient = async (req, res, next) => {
    try {
        const patient = await Patients.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        console.error(error);
        next();
    }
}

exports.updatePatient = async (req, res, next) => {
    try {
        const patient = await Patients.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(patient);
    } catch (error) {
        console.error(error);
        next();
    }
}

exports.deletePatient = async (req, res, next) => {
    try {
        await Patients.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: 'The patient has been deleted' });
    } catch (error) {
        console.error(error);
        next();
    }
}