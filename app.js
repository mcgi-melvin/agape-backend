require('dotenv').config()

const
    express = require('express'),
    app = express()

app.listen(process.env.APP_PORT, () => {
    console.log(`App listening on port ${process.env.APP_PORT}`)
})