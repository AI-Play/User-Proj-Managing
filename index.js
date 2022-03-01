import Fastify from "fastify";
import dbConnector from "./dbConnector.js";
import routes from "./routes.js";

const fastify = Fastify({
    logger: true,
});
fastify.register(dbConnector);
fastify.register(routes);

const start = async () => {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();