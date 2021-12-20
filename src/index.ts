import express from "express";
import {Request, Response} from "express";
import * as path from "path";

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname)));

app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "127.0.0.1");