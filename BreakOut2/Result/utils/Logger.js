import fs from "fs"

export default (() => {
	const file = "log.txt"
	function log(message) {
		console.log(message)
		fs.appendFileSync(file, `${Date().toString()}--${message} \n`)
	}

	function error(message, error) {
		console.error(error, message)
		fs.appendFileSync(file, `${Date().toString()}--${message} \n`)
	}

	function printLog() {
		const fileBuffer = fs.readFileSync(file)

		console.log(fileBuffer.toString())
	}

	return { log, error, printLog } 
})()
