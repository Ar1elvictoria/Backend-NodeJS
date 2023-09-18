
const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hola Mundo XD')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})