const User = require("../models/user.model");

async function getAllUsers(request, reply) {
    try {
        const users = await User.find();
        reply.send(users);
    } catch (error) {
        reply.status(500).send(err);
    }
}

async function getUserById(request, reply) {
    try {
        const user = await User.findById(request.params.id);
        reply.send(user);
    } catch (error) {
        reply.status(500).send(err);
    }
}

async function createUser(request, reply) {
    try {
        const user = new User(request.body);
        const result = await user.save();
        reply.send(result);
    } catch (error) {
        reply.status(500).send(err);
    }
}

async function updateUser(request, reply) {
    try {
        const user = await User.findByIdAndUpdate(request.params.id, request.body, {
            new: true
        });
        reply.send(user);
    } catch (error) {
        reply.status(500).send(err);
    }
}

async function deleteUser(request, reply) {
    try {
        await User.findByIdAndDelete(request.params.id);
        reply.status(203).send("");
    } catch (error) {
        reply.status(500).send(err);
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}