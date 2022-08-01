const knex = require("../../db/connection");
const mapProperties = require("../../utils/map-properties");

const mapCriticProperties = mapProperties({
  critic_id: "critic.critic_id",
  preferred_name: "critic.preffered_name",
  surname: "critic.surname",
  organization_name: "critic.organization_name",
  created_at: "critic.created_at",
  updated_at:"critic.updated_at",
});

function update(updatedReview) {
  return knex("reviews as r")
    .select("*")
    .where({ "r.review_id": updatedReview.review_id })
    .update(updatedReview)
    .then((updatedReview) => updatedReview[0]);
}

function read(reviewId) {
  return knex("reviews")
  .select("*")
  .where({ review_id : reviewId })
  .first();
}

function destroy(reviewId) {
  return knex(reviewId)
    .select("*")
    .where({ "r.review_id": reviewId })
    .first()
    .del();
}

module.exports = {
  update,
  read,
  delete: destroy,
}