const create = async ({ annotationRepository, annotation }) => {
  const createdAnnotation = annotationRepository.create(annotation);
  return createdAnnotation;
};

module.exports = {
  create,
};
