import express from "express"
import * as todoController from "../controllers/todoController.js"

const router = new express.Router()

router.get("/todo", (req, res) => {
	// res.send({ name: "MyToDo", status: "NEW" })
	res.send(todoController.read())
})

export default router
