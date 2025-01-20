require('dotenv').config()

const
    express = require('express'),
    app = express()

app.get('/', (req, res) => {
    res.send('Testing')
})
app.listen(process.env.APP_PORT, () => {
    console.log(`App listening on port ${process.env.APP_PORT}`)
})