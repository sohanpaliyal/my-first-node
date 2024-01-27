const express  = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())
app.use(cors())


const userRouter = require('./routes/userRoutes')
app.use('/api/users', userRouter)
module.exports = app;