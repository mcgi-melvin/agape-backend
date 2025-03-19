const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})

const query = async ( sql, values ) => {
    try {
        const [result, fields] = await connection.execute(sql, values)
        return {
            status: true,
            message: "Query successfully verified",
            data: { result, fields }
        }
    } catch (e) {
        //TODO: Put the error to log
        console.log(e)
        return {
            status: false,
            message: e,
        }
    }
}

module.exports = {
    query
}