module.exports = (app) => {
    const complaints = require("../controllers/complaintsController.js");
    const router = require("express").Router();
    const upload = require("../middlewares/upload");
  
    router.post("/", complaints.saveComplaints);
    router.get("/",complaints.getAllComplaints);
    router.get("/:id",complaints.getComplaintsById);
    router.put("/:id",complaints.updateComplaints);
    router.delete("/:id",complaints.deleteComplaintsId);
    router.get("/download",complaints.download);
    router.post("/upload", upload.single("file"), complaints.upload);
  
    app.use("/complaints", router);
  };