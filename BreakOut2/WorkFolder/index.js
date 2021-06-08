import logger from "./Logger/logger.js"
import http from "http"

function WriteSomeLogs() {
	function logAsync() {
		console.log("Asnc log writing is done!")
	}
	WriteAsyncLog(logAsync)
	logger().logInfo("Application is running and writing logs...")
	logger().logError("An error has occurred with error code", "OP_EX_4042")
}

function WriteAsyncLog(Callbackfn) {
	setTimeout(Callbackfn, 3000)
}

const server = http.createServer((req, resp) => {
	if (req.method === "GET") {
		resp.end("Log server is running...")
	}
})

server.listen(4001, () => {
	console.log("Server started.")
})

setTimeout(() => {
	console.log("Hello afetr 3 Seconds")
	logger().logInfo("Server is up and running.")
}, 3000)

setTimeout(() => {
	console.log("Showing all logs after server started - ")
	console.log("Logs -----------------------------------------")
	console.log(logger().getLog())
}, 4000)

WriteSomeLogs()
