const express = require('express');
const app = express();
const cors = require('cors')
const http = require('http');
const USERS = require('./mock-data/mock-users.json');
const server = http.createServer(app);

const chatController = require('./controllers/chatController');
const userController = require('./controllers/userController');

app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  
  const { userId } = socket.handshake.query;
  
  // // Listen for new messages
  // socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
  //   io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  // });

  // // Leave the room if the user closes the socket
  // socket.on("disconnect", () => {
  //   socket.leave(roomId);
  // });
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'))

app.get('/users', userController.getUsers, (req, res, next) => {
  return res.status(200).json(res.locals.users);
})

app.post('/chats', chatController.getChats, (req, res) => {
  return res.status(200).json(res.locals.data);
})

//catch all request handler
app.use((req, res) => res.status(404).send('No page found'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(3000); 