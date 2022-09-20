import express from "express";
import cors from "cors"
import bodyParser from "body-parser";
import {deleteTodo, getTodo, sendTodo, updateTodo} from "./views/todoRequests.js";

const app = express()

app.use(cors())
app.use(bodyParser.json())


app.get("/", getTodo)
app.post("/", sendTodo)
app.delete("/:id", deleteTodo)
app.put("/", updateTodo)

app.listen(5000, () => {
	console.log("App Start")
})