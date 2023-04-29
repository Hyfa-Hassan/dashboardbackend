const express = require('express')
const cors = require('cors');
const connectDB = require("./database/db")
const contactusRouter = require("./routes/contactus")

const app = express();
connectDB();

const port = 3004
app.use(cors());
app.use(express.json())
app.use(contactusRouter)
app.use((error, req, res, next) => {
    console.error(error);
    next(error)
})
app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message,
        stack: error.stack
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
