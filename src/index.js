const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
const userRoute = require("./routes/user");
userRoute(app);
app.get("/", (req, res) => res.send("Olá mundo pelo express"));
app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));
