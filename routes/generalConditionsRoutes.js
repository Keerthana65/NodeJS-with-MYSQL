module.exports = (app) => {
  const generalConditions = require("../controllers/generalConditionsController.js");
  const router = require("express").Router();

  router.post("/", generalConditions.saveGeneralConditions);
  router.get("/", generalConditions.getAllGeneralConditions);
  router.get("/:id", generalConditions.getGeneralConditionsById);
  router.put("/:id", generalConditions.updateGeneralConditions);
  router.delete("/:id", generalConditions.deleteGeneralConditionsId);

  app.use("/generalConditions", router);
};