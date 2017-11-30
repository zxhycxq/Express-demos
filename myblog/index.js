/*
const path = require('path')
const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'))// 设置存放模板文件的目录
app.set('view engine', 'ejs')// 设置模板引擎为 ejs

app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000)
*/

const express = require('express')
const app = express()

app.use(function (req, res, next) {
  console.log('1')
  // next()
  next(new Error('hahah-error'))
})

app.use(function (req, res, next) {
  console.log('2')
  res.status(200).end()
})

app.use(function (err,req,res,next) {
  console.log(err.stack);
  res.status(500).send('我是错误，可以在浏览器看somethind broke')
})

app.listen(3000)
