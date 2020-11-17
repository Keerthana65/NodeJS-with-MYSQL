module.exports = (app) => {
    const childDetails = require("../controllers/childDetailsController.js");
    const router = require("express").Router();
  
    router.post("/", childDetails.saveChildDetails);
    router.get("/",childDetails.getAllChildDetails);
    router.get("/:id",childDetails.getChildDetailsById);
    router.put("/:id",childDetails.updateChildDetails);
    router.delete("/:id",childDetails.deleteChildDetailsId);
  
    app.use("/childDetails", router);
  };
  