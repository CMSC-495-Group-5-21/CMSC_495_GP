"use strict";
exports.__esModule = true;
// Express imports
var express = require("express");
// TypeORM imports
var typeorm_1 = require("typeorm");
// Create database createConnection
typeorm_1.createConnection().then(function (connection) {
    // Create and setup express application
    var app = express();
    app.use(express.json());
    // Register routes below
});
// Start the express server
app.listen(4000() = {
    console: console,
    : .log('Listening at http://localhost:4000')
});
