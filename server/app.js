require('dotenv').config()
require('express-async-errors')
const cors = require('cors');
const express = require('express')
const app = express()
const {connectDatabase} = require('./database')
const userRouter = require('./routes/routes')

/* const username = process.env.username;
const password = process.env.password; */

app.use(cors())
app.use(express.json())

app.use('/api', userRouter)

const port = 5000
const start = async() => {
    try {
        await connectDatabase(process.env.mongo_url)
        console.log(`Database connected successfully...`);
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()