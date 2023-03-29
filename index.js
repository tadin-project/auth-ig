require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./src/config/db");
const { errorHandler } = require("./src/middlewares");
const { authRoute, userRoute } = require("./src/routes");

connectDB();

const PORT = process.env.PORT || 3500;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/login", authRoute);
app.use("/api/users", userRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
