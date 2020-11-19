module.exports = (app) => {
    const pastPresentingComplaints = require("../controllers/pastPresentingComplaintsController.js");
    const router = require("express").Router();
  
    router.post("/", pastPresentingComplaints.savePastPresentingComplaints);
    router.get("/",pastPresentingComplaints.getAllPastPresentingComplaints);
    router.get("/:id",pastPresentingComplaints.getPastPresentingComplaintsById);
    router.put("/:id",pastPresentingComplaints.updatePastPresentingComplaints);
    router.delete("/:id",pastPresentingComplaints.deletePastPresentingComplaintsId);
  
    app.use("/pastPresentingComplaints", router);
  };