const express = require("express");
const app = express();
const routes = require('./routes');
const ExpressError = require("./common/expressError");

app.use(express.json());

