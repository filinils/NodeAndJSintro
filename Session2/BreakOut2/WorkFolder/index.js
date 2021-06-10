import express from "express"
import dotenv from "dotenv"
import toDoRouter from "./routes/todo.js"

dotenv.config()

const app = express()
app.use(toDoRouter)

app.listen(process.env.port)
