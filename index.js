const express = require("express");
const cors = require("cors");
const app = express();
const PORT=3000;
const connectDB = require("./Database/connectionDB")


// middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))



app.listen(PORT, ()=>{
    console.log(`server running at localhost:${PORT}/`)
})