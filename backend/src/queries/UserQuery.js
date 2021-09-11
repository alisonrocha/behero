const userQuery = {
    createUser: "INSERT INTO USER (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?)",
    listUser: "SELECT NAME, EMAIL FROM USER WHERE STATUS = 'ATIVO'",
    updateUser: "UPDATE USER SET NAME = ?, EMAIL = ?, PASSWORD = ? WHERE EMAIL = ?",
    deleteUser: "UPDATE USER SET STATUS = 'INATIVO' WHERE EMAIL = ?",
    reactivateUser: "UPDATE USER SET STATUS = 'ATIVO' WHERE EMAIL = ?",
}

module.exports = userQuery;