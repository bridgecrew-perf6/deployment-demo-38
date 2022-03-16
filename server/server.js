const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

// Middleware
app.use(express.static(path.join(__dirname, "../public")))


// // Endpoints:
// // app.get("/", function(req, res) {
// //     res.sendFile(path.join(__dirname, "../public/index.html"))
// // })

// // app.get("/styles", (req, res) => {
// //     res.sendFile(path.join(__dirname, "../public/index.css"))
// // })

//If pictures were in the local file and not online, link them from index.html locally
//and this code is needed for heroku to be able to access it from /public folder.
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public"))
// })

const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`Vibin' on port ${port}`)
})

