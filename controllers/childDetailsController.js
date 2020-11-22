const db = require("../models");
const moment = require("moment");

const calBmi = (height, mass) => {
    let bmi = ((mass / (height * height)) * 10000).toFixed(2);
    return bmi
}

const currentAge = (dateOfBirth) => {
    let today = new Date();
    let birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    return age;
}

const calMonth = (dateOfBirth) => {
    let today = new Date();
    let birthDate = new Date(dateOfBirth);
    let months = today.getMonth() - birthDate.getMonth();
    return months;
}

function saveChildDetails(req, res) {
    const childDetailsObj = {
        id: req.body.id,
        surname: req.body.surname,
        forname: req.body.forname,
        dateOfBirth: req.body.dateOfBirth,
        school: req.body.school,
        address: req.body.address,
        carer: req.body.carer,
        familyCompositionSurname: req.body.familyCompositionSurname,
        familyCompositionForname: req.body.familyCompositionForname,
        familyCompositionDateOfBirth: req.body.familyCompositionDateOfBirth,
        childReleationship: req.body.childReleationship,
        occupation: req.body.occupation,
        ethnicity: req.body.ethnicity,
        generalPractitionerAddress: req.body.generalPractitionerAddress,
        gpTelephone: req.body.gpTelephone,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        height: req.body.height,
        weight: req.body.weight,
        BMI: calBmi(req.body.height, req.body.weight),
        gpName: req.body.gpName,
        BHTNo: req.body.BHTNo,
        yearBHTNo: req.body.yearBHTNo,
        carerContactNo: req.body.carerContactNo,
        age: currentAge(req.body.dateOfBirth),
        months: calMonth(req.body.dateOfBirth)
    };
    db.childDetails
        .create(childDetailsObj)
        .then((result) => {
            res.status(200).json({
                message: "Child Details Created Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function getAllChildDetails(req, res) {
    db.childDetails
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

function getChildDetailsById(req, res) {
    const id = req.params.id;
    db.childDetails
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

function updateChildDetails(req, res) {
    const id = req.params.id;
    const childDetailsObj = {
        surname: req.body.surname,
        forname: req.body.forname,
        dateOfBirth: req.body.dateOfBirth,
        school: req.body.school,
        address: req.body.address,
        carer: req.body.carer,
        familyCompositionSurname: req.body.familyCompositionSurname,
        familyCompositionForname: req.body.familyCompositionForname,
        familyCompositionDateOfBirth: req.body.familyCompositionDateOfBirth,
        childReleationship: req.body.childReleationship,
        occupation: req.body.occupation,
        ethnicity: req.body.ethnicity,
        generalPractitionerAddress: req.body.generalPractitionerAddress,
        gpTelephone: req.body.gpTelephone,
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        height: req.body.height,
        weight: req.body.weight,
        BMI: req.body.BMI,
        gpName: req.body.gpName,
        BHTNo: req.body.BHTNo,
        yearBHTNo: req.body.yearBHTNo,
        carerContactNo: req.body.carerContactNo,
        age: req.body.age,
        months: req.body.months
    };
    db.childDetails
        .update(childDetailsObj, { where: { id: id } })
        .then((result) => {
            res.status(200).json({
                message: "Child Details Updated Successfully"
            });
        })
        .catch((error) => {
            res.status(500).json({
                message: "Something Wrong",
                error: error,
            });
        });
}

function deleteChildDetailsId(req, res) {
    const id = req.params.id;
    db.childDetails
        .destroy({
            where: { id: id },
        })
        .then((result) => {
            res.status(200).json({
                message: "Child Details Deleted Successfully",
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
    saveChildDetails,
    getAllChildDetails,
    getChildDetailsById,
    updateChildDetails,
    deleteChildDetailsId
};
