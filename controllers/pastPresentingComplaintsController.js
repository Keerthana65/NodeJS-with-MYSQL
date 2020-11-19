const db = require("../models");

function savePastPresentingComplaints(req, res) {
    const pastPresentingComplaintsObj = {
        history: req.body.history,
        childDetailId: req.body.childDetailId,
        admitClinicDetailId: req.body.admitClinicDetailId
    };
    db.pastPresentingComplaints
        .create(pastPresentingComplaintsObj)
        .then((result) => {
            res.status(200).json({
                message: "Past Presenting Complaints Created Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function getAllPastPresentingComplaints(req, res) {
    db.pastPresentingComplaints
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

function getPastPresentingComplaintsById(req, res) {
    const id = req.params.id;
    db.pastPresentingComplaints
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

function updatePastPresentingComplaints(req, res) {
    const id = req.params.id;
    const pastPresentingComplaintsObj = {
        history: req.body.history,
        childDetailId: req.body.childDetailId,
        admitClinicDetailId: req.body.admitClinicDetailId
    };
    db.pastPresentingComplaints
        .update(pastPresentingComplaintsObj, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                message: "Past Presenting Complaints Updated Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function deletePastPresentingComplaintsId(req, res) {
    const id = req.params.id;
    db.pastPresentingComplaints
        .destroy({
            where: { id: id },
        })
        .then((result) => {
            res.status(200).json({
                message: "Past Presenting Complaints Deleted Successfully",
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
    savePastPresentingComplaints,
    getAllPastPresentingComplaints,
    getPastPresentingComplaintsById,
    updatePastPresentingComplaints,
    deletePastPresentingComplaintsId
};