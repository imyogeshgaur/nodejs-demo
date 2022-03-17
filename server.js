const express = require('express');
const app  = express();
const connectDb = require('./Db/connection');

connectDb();
app.use(express.json());
app.use("/api",require('./routes/userRoutes')); 
app.listen(8000,"localhost",()=>console.log("Server is Running !!!"));