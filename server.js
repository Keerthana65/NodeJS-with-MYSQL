const express = require("express");
const db = require("./models");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./routes/childDetailsRoutes")(app);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
});
