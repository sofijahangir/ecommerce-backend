const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const {
  signupRouter,
  loginRouter,
  productRouter,
  userRouter,
} = require("./routes");
const { MONGO_URI, MONGO_OPTIONS } = require("./config");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(morgan("dev"));

// Routers
app.use("/", signupRouter);
app.use("/", loginRouter);
app.use("/", productRouter);
app.use("/admin", userRouter);

mongoose
  .connect(MONGO_URI, MONGO_OPTIONS)
  .then(() => console.log("connected"))
  .catch((e) => console.log("error:", e));

app.listen(port, () => console.log(`running on ${port}`));
