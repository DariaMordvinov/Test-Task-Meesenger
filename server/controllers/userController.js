const USERS = require('../mock-data/mock-users.json');

const userController = {};

userController.getUsers = (req, res, next) => {
    const users = [];
    for (const [key, value] of Object.entries(USERS)) {
        users.push({id: key, name: value.name})
    };
    res.locals.users = users;
    next()
}


module.exports = userController;