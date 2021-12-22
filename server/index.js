const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const public = path.join(__dirname, '../client/dist')
app.use(express.static(public))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})