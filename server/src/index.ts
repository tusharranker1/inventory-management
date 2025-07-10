import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoute from "./routes/dashboardRoutes";
import productRoute from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";
import expensesRoute from './routes/expenseRoute'
// route imports

// config
//dotenv.config();
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Route
app.use("/dashboard", dashboardRoute);
app.use("/products", productRoute);
app.use("/users", userRoutes);
app.use("/expenses", expensesRoute);

// server
const port = Number(process.env.PORT) || 3001;
app.listen(port,"0.0.0.0" ,() => {
  console.log(`server running on port ${port}`);
});
