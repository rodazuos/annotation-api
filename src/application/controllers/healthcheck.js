const { OK, INTERNAL_SERVER_ERROR } = require("http-status"); 

module.exports = ({ dbContextFactory }) => {
    const check = async (ctx) => {
        try {
            const connDb = await dbContextFactory.mongoDbInstance();
            ctx.status = OK;
            if (dbContextFactory.isConnected(connDb)) {
                ctx.body = "Application running. Healthcheck OK!";
            } else {
                ctx.body = "Application running. Without database conenction!";
            }
        } catch (error) {
            ctx.status = INTERNAL_SERVER_ERROR;
            ctx.body = "Database unnavailable!";
        }
    };

    return {
        check
    }
}