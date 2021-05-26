import logger from "./utils/Logger.js"
import http from "http"
import dotenv from "dotenv"
import Prom from "./Prom.js"

dotenv.config()

function init() {
	console.log("Hello world!!!")
	logger.log("My logger")
	logger.error("My logger error", "Code 1234")

	logger.log(process.env.foo)
	logger.log(process.env.bar)
	logger.log(process.argv)

	const doSometingAsync = Prom((resolve) => {
		setTimeout(resolve, 1000)
	})

	doSometingAsync.then(() => {
		logger.log("my 1 async func is finished and 1 then")
	})
	doSometingAsync.then(() => {
		logger.log("my 1 async func is finished and 2 then")
	})
	doSometingAsync.then(() => {
		logger.log("my 1 async func is finished and 3 then")
	})

	someCodeThatTakesTime()
}

async function someCodeThatTakesTime() {
	const myAsyncTask = await Prom(() => {
		setTimeout(() => {
			console.log("Im finished")
		}, 3000)
	})

	return myAsyncTask
}

const server = http.createServer((req, res) => {
	res.write("Eureka!!!")
	res.end()
})

server.on("connection", (req) => {
	logger.log("Someone is trying to get us!!!!!!!!" + req.remoteAddress)
})
server.listen(8081)
init()
