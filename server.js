const express = require("express")
const { social, profile } = require("./data")

const app = express()

app.use("/assets", express.static("assets"))

app.set("view engine", "ejs")

app.get("/", function (req, res) {
  res.render("pages/index", { social: social, profile: profile })
})

app.listen(8080, () => {
  console.log("Is running!")
})
