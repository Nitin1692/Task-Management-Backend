const express = require("express");
const dbconnect = require('./dbConnect')
const cors = require('cors')
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/authRouter')
const taskRouter = require('./routes/taskRouter')

dotenv.config("./.env");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))


const PORT = process.env.PORT || 5001;

app.use('/api',authRouter)
app.use('/api',taskRouter)
app.get("/", (req, res) => {
    res.status(200).send("OK from Server");
});

dbconnect();
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});