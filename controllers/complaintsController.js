const db = require("../models");

const fs = require("fs");
const csv = require("fast-csv");
const CsvParser = require("json2csv").Parser;

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

function download(req, res){
    db.complaints.findAll().then((objs) => {
      let comp = [];
  
      objs.forEach((obj) => {
        const { id, complaintsName } = obj;
        comp.push({ id,complaintsName });
      });
  
      const csvFields = ["Id", "Complaints Name"];
      const csvParser = new CsvParser({ csvFields });
      const csvData = csvParser.parse(comp);
  
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=comp.csv");
  
      res.status(200).end(csvData);
    });
  };

  function upload(req, res){
    try {
      if (req.file == undefined) {
        return res.status(400).send("Please upload a CSV file!");
      }
  
      let comp = [];
      let path = "D:/Keerthi/Import/" + req.file.filename;
  
      fs.createReadStream(path)
        .pipe(csv.parse({ headers: true }))
        .on("error", (error) => {
          throw error.message;
        })
        .on("data", (row) => {
            comp.push(row);
        })
        .on("end", () => {
            db.complaints.bulkCreate(comp)
            .then(() => {
              res.status(200).send({
                message:
                  "Uploaded the file successfully: " + req.file.originalname,
              });
            })
            .catch((error) => {
              res.status(500).send({
                message: "Fail to import data into database!",
                error: error.message,
              });
            });
        });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Could not upload the file: " + req.file.originalname,
      });
    }
  };

module.exports = {
    saveComplaints,
    getAllComplaints,
    getComplaintsById,
    updateComplaints,
    deleteComplaintsId,
    download,
    upload,
};