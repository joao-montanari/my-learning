const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const cors = require("@fastify/cors");
require("dotenv").config();

// Import my routes
const userRoutes = require("./routes/user.routes");

// Connect to my database
mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to the database"))
    .catch((e) => console.error("Error connecting to database", e));

fastify.register(cors, {
    origin: "*"
});

// Start my server
fastify.register(userRoutes, { prefix: "/api/v1/users" });

const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 5000 });
        fastify.log.info(`Server is running on port ${fastify.server.address().port}`);
    } catch (error) { }
}

start();