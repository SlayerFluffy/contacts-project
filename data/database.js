const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
    if (database) {
        console.log("Database is already initialized!");
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then(client => {
            database = client;
            callback(null, database);
        })
        .catch(err => {
            callback(err);
        });
};

const getDatabase = () => {
    if (!database) {
        throw Error("Database not initialized");
    }
    return database;
};

const getDbByName = (dbName) => {
    if (!database) {
        throw Error("Database not initialized");
    }

    return database.db(dbName);
};

const getUsersDb = () => {
    const usersDbName = process.env.MONGODB_DB_USERS || 'Users';
    return getDbByName(usersDbName);
};

const getCharactersDb = () => {
    const charactersDbName = process.env.MONGODB_DB_CHARACTERS || 'Characters';
    return getDbByName(charactersDbName);
};

module.exports = {
    initDb,
    getDatabase,
    getUsersDb,
    getCharactersDb
};