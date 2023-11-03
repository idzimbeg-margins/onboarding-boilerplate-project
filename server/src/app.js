const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const pokemonRouter = require("./routes/pokemonRoutes");

const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "http://localhost:5172",
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/pokemon", pokemonRouter);

app.use(globalErrorHandler);

module.exports = app;
