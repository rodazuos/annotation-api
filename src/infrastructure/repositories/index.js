const annotation = require("./annotation");

module.exports = ({ dbContextFactory }) => ({
    annotationRepository: annotation(dbContextFactory)
});