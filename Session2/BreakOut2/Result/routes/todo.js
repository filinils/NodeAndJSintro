import * as todoController from '../controllers/todoController.js'

const route = '/todo'

export default (app) => {
  app.get(route, async (req, res) => {
    try {
      const dbResponse = await todoController.read()
      res.send(dbResponse)
    } catch (error) {
      res.status(400)
      res.send(error)
    }
  })
}
