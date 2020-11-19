module.exports = (app) => {
    const complaints = require("../controllers/complaintsController.js");
    const router = require("express").Router();
  
    router.post("/", complaints.saveComplaints);
    router.get("/",complaints.getAllComplaints);
    router.get("/:id",complaints.getComplaintsById);
    router.put("/:id",complaints.updateComplaints);
    router.delete("/:id",complaints.deleteComplaintsId);
  
    app.use("/complaints", router);
  };