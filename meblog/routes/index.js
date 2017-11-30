module.exports = function (app) {
  app.get ('/', function (req, res) {
    res.redirect ('/posts')
  })
  app.use ('/signup', require ('./signup'))
  app.use ('/signin', require ('./signin'))
  app.use ('/signout', require ('./siginout'))
  app.use ('/post', require ('./posts'))
  app.use ('/comments', require ('./comments'))
}
