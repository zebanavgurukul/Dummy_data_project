const knex = require ("knex");

const connection = {
    client : "mysql",
    connection : {
        host : "localhost",
        user : "root",
        password : "navgurukul",
        database : "interview_project"
    }
};

module.exports = knex(connection);