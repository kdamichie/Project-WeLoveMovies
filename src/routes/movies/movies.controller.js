const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(req, res, next) {
  const { movieId } = req.params;
  const movie = await service.read(movieId);
  
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({
    status: 404,
    message: `Movie cannot be found.`
  });
}

async function list(req, res) {
  const { is_showing } = req.query;
  
  if(is_showing) {
    const data = await service.listIsShowing();
    return res.json({ data });
  }
  const data = await service.list();
  res.json({ data });
}

function read(req, res) {
  res.json({ data: res.locals.movie });
}

async function listTheatersByMovie(req, res) {
  const theaters = await service.listTheatersByMovie(res.locals.movie);
  res.json({ data: theaters })
}

async function listReviewsByMovie(req, res) {
  const reviews = await service.listReviewsByMovie(res.locals.movie);
  res.json({ data: reviews });
}

module.exports = {
  list: asyncErrorBoundary(list),
  read: [asyncErrorBoundary(movieExists), read],
  listTheatersByMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listTheatersByMovie)],
  listReviewsByMovie: [asyncErrorBoundary(movieExists), asyncErrorBoundary(listReviewsByMovie)],
}