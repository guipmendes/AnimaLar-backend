import express from "express";

const app = express();
const port = 3030;

app.use(express.json());    

app.listen(port);
