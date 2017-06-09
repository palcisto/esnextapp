const express = require('express')
const swig = require('swig')
const app = express()

app.engine('html', swig.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')
app.use(express.static('build'))

app.get('/', function (req, res) {
  res.render('index.html', { title: 'Hey Pat', message: 'Hope you like Swig as much as I like loam. Also, check the console to see the WebPack\'d js.' })
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})