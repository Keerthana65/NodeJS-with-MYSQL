const db = require("../models");

function saveComplaints(req, res) {
    const complaintsObj = {
        complaintsName: req.body.complaintsName
    };
    db.complaints
        .findOne({
            where: { complaintsName: req.body.complaintsName },
        })
        .then((savedComplaints) => {
            if (savedComplaints) {
                return res.status(422).json({ error: "Complaint Already Exist" });
            }
            db.complaints
                .create(complaintsObj)
                .then((result) => {
                    res.status(200).json({
                        message: "Complaints Created Successfully"
                    });
                })
                .catch((error) => {
                    res.status(500).json({
                        message: "Something Wrong",
                        error: error,
                    });
                });
        });
}

function getAllComplaints(req, res) {
    db.complaints
        .findAll()
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
            });
        });
}

function getComplaintsById(req, res) {
    const id = req.params.id;
    db.complaints
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

function updateComplaints(req, res) {
    const id = req.params.id;
    const complaintsObj = {
        complaintsName: req.body.complaintsName
    };
    db.complaints
        .update(complaintsObj, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                message: "Complaints Updated Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function deleteComplaintsId(req, res) {
    const id = req.params.id;
    db.complaints
        .destroy({
            where: { id: id },
        })
        .then((result) => {
            res.status(200).json({
                message: "Complaints Deleted Successfully",
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
    saveComplaints,
    getAllComplaints,
    getComplaintsById,
    updateComplaints,
    deleteComplaintsId
};