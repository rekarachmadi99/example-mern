import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoutes.js";

const app = express();
const port = 5000;
mongoose.connect('mongodb://127.0.0.1:27017/latihan_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('strictQuery', true);

const db = mongoose.connection;
db.on('error',(error)=>{
    console.log(error);
});
db.once('open',()=>{
    console.log('Database Connected');
});

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(port, ()=>{
    console.log('Server is running!');
})