const { OK } = require('http-status');

module.exports = () => {
    const create = async (ctx) => {
        ctx.status = OK;
        ctx.body = 'CREATE';
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