const db = require("../models");

function saveGeneralConditions(req, res) {
    const generalConditionsObj = {
        generalCondition: req.body.generalCondition,
        temp: req.body.temp,
        pulse: req.body.pulse,
        resp: req.body.resp,
        height: req.body.height,
        bloodGroup: req.body.bloodGroup,
        weight: req.body.weight,
        doctorInFormed: req.body.doctorInFormed,
        date: req.body.date,
        childDetailId: req.body.childDetailId,
        admitClinicDetailId: req.body.admitClinicDetailId
    };
    db.generalConditions
        .create(generalConditionsObj)
        .then((result) => {
            res.status(200).json({
                message: "General Condition Created Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function getAllGeneralConditions(req, res) {
    db.generalConditions
        .findAll({ include: [{ model: db.childDetails }, { model: db.admitClinicDetails }] })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
            });
        });
}

function getGeneralConditionsById(req, res) {
    const id = req.params.id;
    db.generalConditions
        .findByPk(id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
            });
        });
}

function updateGeneralConditions(req, res) {
    const id = req.params.id;
    const generalConditionsObj = {
        generalCondition: req.body.generalCondition,
        temp: req.body.temp,
        pulse: req.body.pulse,
        resp: req.body.resp,
        height: req.body.height,
        bloodGroup: req.body.bloodGroup,
        weight: req.body.weight,
        doctorInFormed: req.body.doctorInFormed,
        date: req.body.date,
        childDetailId: req.body.childDetailId,
        admitClinicDetailId: req.body.admitClinicDetailId
    };
    db.generalConditions
        .update(generalConditionsObj, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                message: "General Conditions Updated Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function deleteGeneralConditionsId(req, res) {
    const id = req.params.id;
    db.generalConditions
        .destroy({
            where: { id: id },
        })
        .then((result) => {
            res.status(200).json({
                message: "General Conditions Deleted Successfully",
            });
        })
        .catch((error) => {
            res.status(200).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

module.exports = {
    saveGeneralConditions,
    getAllGeneralConditions,
    getGeneralConditionsById,
    updateGeneralConditions,
    deleteGeneralConditionsId
};