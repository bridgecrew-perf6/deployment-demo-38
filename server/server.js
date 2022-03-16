const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Vibin' on port ${port}`)
})

