const express = require('express')
const app = express()

const port = 3000

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('index', {
    title: 'gSecrets'
  })
  console.log('get success')
})

app.listen(port, (req, res) => {
  console.log("Listening on port:", port)
})
