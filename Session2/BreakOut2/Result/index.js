import express from 'express'
import expressConfig from './config/expressConfig.js'
import router from './routes/router.js'

const app = express()

const PORT = process.env.PORT || 8080
expressConfig(app)
router(app)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
