import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.get("/todo", (req, res) => {
	res.send({ name: "MyToDo", status: "NEW" })
})

app.listen(process.env.port)
