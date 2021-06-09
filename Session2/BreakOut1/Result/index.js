import dotenv from "dotenv"
import express from "express"

dotenv.config()
const app = express()

//CORS setup
//JSON Body parser
//Content Type/Headers

app.get("/todo", (req, res) => {
	//Mock async db request
	setTimeout(() => {
		res.send({
			name: "My todo",
			status: "new",
		})
	}, 2000)
})

app.listen(process.env.port)
