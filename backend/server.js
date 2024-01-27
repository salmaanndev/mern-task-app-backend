const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/connectDB");
const taskRoutes = require("./routes/taskRoutes");
const app = express();

const PORT = process.env.PORT || 5000;

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on PORT: ${PORT}`);
    });
});
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(taskRoutes);

app.get("/", (req, res)=>{
    res.send("Home Page");
});