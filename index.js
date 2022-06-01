const express = require('express')
const app = express()

app.get('/express', function(req, res) {
    res.send('Hola mundo :3')
})

app.listen(3000)