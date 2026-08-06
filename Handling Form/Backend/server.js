import express from "express"
import cors from "cors"

const app = express()
const port = 5000

// Middleware
app.use(cors())
app.use(express.json()) // for JSON bodies
app.use(express.urlencoded({ extended: true })) // for form data

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/", (req, res) => {
  console.log("hii",req.form)
  res.send("Data received successfully!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
