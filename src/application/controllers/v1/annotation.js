const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

const annotationDomain = require("../../../domain/annotation");

module.exports = ({ repository }) => {
    const { annotationRepository } = repository;

    const create = async (ctx) => {
        try {
            const payload = ctx.request.body;
            const annotation = payload;
            const result = await annotationDomain.create({ annotationRepository, annotation });
            if (result) {
                ctx.status = OK;
                ctx.body = result.data;
            }
        } catch (error) {
            ctx.status = INTERNAL_SERVER_ERROR;
            ctx.body = { error };
        }
    };

    const update = async (ctx) => {
        ctx.status = OK;
        ctx.body = 'UPDATE';
    };

    const remove = async (ctx) => {
        ctx.status = OK;
        ctx.body = 'REMOVE';
    };

    const list = async (ctx) => {
        ctx.status = OK;
        ctx.body = 'LIST';
    };

    return {
        create,
        update,
        remove,
        list
    }
}