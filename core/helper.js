const bcrypt = require("bcrypt");
const hash = async ( text ) => {
    try {
        return await bcrypt.hash(text, 10000)
    } catch (e) {
        // TODO: Put the error to log
        return ""
    }
}

const verifyHash = async ( text, hashedText ) => {
    try {
        return await bcrypt.compare(text, hashedText)
    } catch (e) {
        // TODO: Put the error to log
        return false
    }
}


module.exports = {
    hash
}