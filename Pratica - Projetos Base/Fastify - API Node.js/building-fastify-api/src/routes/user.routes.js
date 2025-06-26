const userController = require("../controllers/user.controller");

async function routes(fastify, options) {
    fastify.get("/", userController.getAllUsers);
    fastify.get("/:id", userController.getUserById);
    fastify.post("/", userController.createUser);
    fastify.put("/:id", userController.updateUser);
    fastify.delete("/:id", userController.deleteUser);
}

module.exports = routes;