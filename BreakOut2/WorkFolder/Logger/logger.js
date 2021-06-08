import fs from "fs"

const logFile = "log.txt"
function logger() {
	function logInfo(message) {
		/*fs.appendFile(logFile, `${Date().toString()}: ${message}\n`, (err) => {
			if (err) throw err
		})*/
		//appendFile writing log Asynchronously, logs are not writing in proper sequece so using appendFileSync.
		fs.appendFileSync(logFile, `${Date().toString()}: ${message}\n`)
	}
	function logError(message, errorCode) {
		/*fs.appendFile(
			logFile,
			`${Date().toString()}: ${message} - ${errorCode}\n`,
			(err) => {
				if (err) throw err
			}
		)*/

		fs.appendFileSync(
			logFile,
			`${Date().toString()}: ${message} - ${errorCode}\n`
		)
	}
	function getLog() {
		const logDetail = fs.readFileSync(logFile)
		return logDetail.toString()
	}
	return { logInfo, logError, getLog }
}

export default logger
