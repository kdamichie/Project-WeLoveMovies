const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {

}

async function list(req, res) {

}

function read(req, res) {

}

async function listTheaters(req, res) {

}

async function listReviews(req, res) {

}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(read), read],
  listTheaters: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listTheaters)],
  listReviews: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listReviews)],
}