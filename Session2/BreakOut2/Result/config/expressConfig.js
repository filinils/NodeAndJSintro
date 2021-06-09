import { json } from 'express'
import cors from 'cors'

export default function expressConfig(app) {
  app.use(cors())
  app.use(json())
}
