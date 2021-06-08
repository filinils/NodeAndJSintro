import logger from './utils/Logger.js'
import http from 'http'
import dotenv from 'dotenv'
import Prom from './Prom.js'

dotenv.config()

function init() {
  //Logger
  console.log('Hello guys, Whats up!!!')
  logger.log('Logging a Message...')
  logger.error('Error', 'Logging an Error Message:')
  //Process .env runtime arguments
  logger.log(process.env.readfromfile)
  //logger.log(process.env.bar)
  //logger.log(process.argv)

  //Promises
  const doSometingAsync = Prom((resolve) => {
    setTimeout(resolve, 1000)
  })

  doSometingAsync.then(() => {
    logger.log('Async 1')
  })
  doSometingAsync.then(() => {
    logger.log('Async 2')
  })
  doSometingAsync.then(() => {
    logger.log('Async 3')
  })

  delay(3)
}

async function delay(time) {
  const myAsyncTask = await Prom(() => {
    setTimeout(() => {
      console.log('Executed after ' +time +' seconds delay!!!\n\nIgnore all the messages above:\n\nNow, Open a browser with url - localhost:8081')
    }, +time + '000')
  })

  return myAsyncTask
}

// Print 9 to 1
for (let i = 9; i >= 1; i--) {
  console.log(i);
}

//HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.write('Team4 - Server is running!!!')
  }
  res.end()
})

server.on('connection', (req) => {
  logger.log('Serving the client----->' + req.remoteAddress + '\nHurray!!! Client-Server is working!')
})
server.listen(8081)
init()
