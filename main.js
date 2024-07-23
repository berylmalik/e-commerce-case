const express = require("express");
const passport = require("passport");
const userRouter = require("./router/user-routes");
const itemRouter = require("./router/item-routes");
const orderRouter = require("./router/order-routes");
const swagger = require("./docs/swager");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(passport.initialize());

app.get("/", (req, res) => {
    return res.status(200).json("E-Commerce Ready");
});

app.use(swagger);

app.use(userRouter);
app.use(itemRouter);
app.use(orderRouter);

module.exports = app;
