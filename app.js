require('dotenv').config()

const
    express = require('express'),
    formidable = require('express-formidable'),
    app = express()

app.use(formidable())

app.use("/api", require("./router/auth"))


app.listen(process.env.APP_PORT, () => {
    console.log(`App listening on port ${process.env.APP_PORT}`)
})
