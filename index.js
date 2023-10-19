const express = require('express')

const app = express()
const port = 2805

app.get('/',(req,res) =>{
    res.send("Hello ini express")
})

app.get('/awawawaw',(req,res) =>{
    res.send("Hello ini awawawaw")
})

app.listen(port,() => console.log(`Server running on port ${port}`))