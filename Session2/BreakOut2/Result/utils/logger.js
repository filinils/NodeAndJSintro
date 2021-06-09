import fs from 'fs'

const file = 'log.txt'

export function log(message) {
  console.log(message)
  fs.appendFileSync(file, `${Date().toString()}--${message} \n`)
}

export function error(message, error) {
  console.error(error, message)
  fs.appendFileSync(file, `${Date().toString()}--${message} \n`)
}

export function printLog() {
  const fileBuffer = fs.readFileSync(file)

  console.log(fileBuffer.toString())
}
