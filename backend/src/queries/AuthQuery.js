const authQuery = {
    signIn: "SELECT * FROM USER WHERE EMAIL = ? AND PASSWORD = ?"
}

module.exports = authQuery;