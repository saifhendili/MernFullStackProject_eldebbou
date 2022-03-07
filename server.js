const express = require('express');
const connectDB = require('./config/db');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
app.use(cors());

//Connect Database
connectDB();
// //Init Middlew:are

app.use(express.json({ extended: false }));
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

server.listen(process.env.PORT || 5000, () =>
  console.log(`Server has started on.`)
);
