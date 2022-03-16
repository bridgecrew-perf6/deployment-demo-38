const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
app.use(cors())
app.use(express.json())

// Middleware
app.use(express.static(path.join(__dirname, "../public")))
//line below is not needed necessarily since above line allows middleware to access all public file
//therefore, simply change "/styles" in index.html to "/index.css" and it can now read it all
// app.use("/styles", express.static(path.join(__dirname, "../public/index.css")))

//this allows heroku to find /images through the link in index.html(accessed above)
app.use("/images", express.static(path.join(__dirname, "../images")))
//can also write above line as an enpoint and it should work


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

