const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {

}

module.exports = {
  list: asyncErrorBoundary(list),
}