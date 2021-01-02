require('./db/mongoose')
const express = require('express')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`)
})

const Task = require('./models/task')
const User = require('./models/user')
const fun = async () => {
  // const task = await Task.findById('5ff06c1d9225cd4ab8fb9cd3')
  // await task.populate('owner').execPopulate()
  // console.log(task.owner)
  // const user = await User.findById('5ff069d698162b4a0ff23b3f')
  // await user.populate('tasks').execPopulate()
  // console.log(user.tasks)
}
fun()
