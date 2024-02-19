const collection = require("./mongo")
const cors = require("cors")
const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/login", cors(), (req, res) => {

})

app.post("/login", async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await collection.findOne({ email: email })

        if (!user) {
            res.json("notexist")
        } else {
            // Check if the provided password matches the one stored in the database
            if (user.password === password) {
                res.json("exist")
            } else {
                res.json("incorrect")
            }
        }
    }
    catch (e) {
        res.json("fail")
    }
})

app.post("/signup", async (req, res) => {
    const { email, password } = req.body

    const data = {
        email: email,
        password: password
    }

    try {
        const check = await collection.findOne({ email: email })

        if (check) {
            res.json("exist")
        } else {
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch (e) {
        res.json("fail")
    }
})

app.listen(3000, () => {
    console.log("port connected");
})
