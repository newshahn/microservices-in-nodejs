"use strict";

const controller = require("./controller");

module.exports = function (app) {
  app.route("/about").get(controller.about);
  app.route("/distance/:zipcode1/:zipcode2").get(controller.getDistance);
};

l8V6jQhwsO9XMsryFp8le54HAeCm3FtRqlfuYYOQ8q7GRVgh5rsGeNiWEi0WJC1B;
