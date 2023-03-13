const USERS = require('../mock-data/mock-users.json');
const MESSAGES = require('../mock-data/mock-messages.json');

const chatController = {};

chatController.getChats = (req, res, next) => {
    const id = req.body.user;
    const name = USERS[id];

    // information on current user
    const currentUser = USERS[id];

    // all chats with the current user
    const userRooms = Object.keys(MESSAGES).filter(room => room.includes(id.toString()));

    // all users, with whom user current user was chatting
    const users = userRooms.map(room => {
        const ids = room.split('-');
        const userId = ids[0] === id.toString() ? ids[1] : ids[0];
        return {userId: userId, room: room}
    });

    const rooms = [];
    const usersInfo = {};
    users.forEach(user => {
        const room = {with: user.userId, room: MESSAGES[user.room]};
        rooms.push(room);
        usersInfo[user.userId] = USERS[user.userId];
    })

    res.locals.data = {rooms, usersInfo, currentUser}
    console.log(res.locals.data)

    return next();
}

module.exports = chatController;