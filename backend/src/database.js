const sqlite3 = require('sqlite3').verbose();

const dbsource = "db.sqlite";

const createUserTable = `
    CREATE TABLE IF NOT EXISTS USER (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        EMAIL TEXT NOT NULL,
        PASSWORD TEXT NOT NULL,
        STATUS TEXT DEFAULT 'ATIVO'
    )
`

const db = new sqlite3.Database(dbsource, (error) => {
    if (error) {
        console.error(error.message);
        throw error;
    } else {
        console.log('Database conected!');

        db.run(createUserTable, (error) => {
            if (error) {
                console.error(error);
                throw error;
            }
        });
    }
});

module.exports = db;