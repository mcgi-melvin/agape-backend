const
    express = require('express'),
    auth = express.Router(),
    {query} = require('../core/database'),
    {hash} = require("../core/helper")

auth.get('/auth/login', (req, res) => {

})

auth.post('/auth/register', async (req, res) => {


    req.fields.password = await hash(req.fields.password)
    const
        sql = `INSERT INTO users (${Object.keys(req.fields).toString()}) VALUES (${Object.values(req.fields).map(() => '?')})`,
        values = Object.values(req.fields)

    const result = await query( sql, values )

    res.send(result)
})


module.exports = auth