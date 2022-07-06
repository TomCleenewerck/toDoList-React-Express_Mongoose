import express from "express";
import mongoose from "mongoose";
import url from "./config.js";
import cors from "cors";
import taskFunc from "./routers/index.js";

const app = express();
const corsOptions = {
    origin: "*",
    credentials: "include", //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
taskFunc(app);

const start = async () => {
    try {
        await mongoose.connect(url);
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();
