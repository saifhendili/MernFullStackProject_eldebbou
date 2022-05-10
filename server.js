const express = require('express');
const connectDB = require('./config/db');
const http = require('http');
const cors = require('cors');
const app = express();

const server = http.createServer(app);


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
  
});


app.use(cors());
let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};



const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};


//Connect Database
connectDB();
// //Init Middlew:are

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/product', require('./routes/api/product'));
app.use('/api/wishlist', require('./routes/api/wishlist'));
app.use('/api/panier', require('./routes/api/panier'));
app.use('/api/comment', require('./routes/api/comment'));
app.use('/api/propositions', require('./routes/api/propositions'));
app.use('/api/order', require('./routes/api/order'));
app.use('/api/requestUser', require('./routes/api/requestUser'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/dialogflow', require('./routes/api/dialogflow'));
app.use('/api/AddIntent', require('./routes/api/AddIntent'));
app.use('/api/conversations', require('./routes/api/conversations'));
app.use('/api/messages', require('./routes/api/messages'));





io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected."+socket);

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      text,
    });
  });


});





server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);
