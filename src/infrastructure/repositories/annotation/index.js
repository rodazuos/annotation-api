module.exports = (dbContextFactory) => {
    const { Annotation } = dbContextFactory.models;

    const create = async (annotation) => {
        try {
            annotation.date = new Date();
            const newAnnotation = await Annotation.create(annotation);
            return { data: newAnnotation };
        } catch (error) {
            console.log(error);
        }
    }

    return {
        create
    }
}