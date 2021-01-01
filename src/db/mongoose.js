const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/js-task-manage-api', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
