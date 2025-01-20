require('dotenv').config()

const
    express = require('express'),
    app = express(),
    port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})