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

}

function read(review_id) {

}

function destroy(reviewId) {

}

module.exports = {
  update,
  read,
  delete: destroy,
}