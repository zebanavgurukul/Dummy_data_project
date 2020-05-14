var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "localhost",
        user: "root",
        password: "navgurukul",
        database: "interview_project"
    },
});

module.exports = knex;

knex.schema.hasTable('post_user').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('post_user', (table) => {
            table.increments('ID')
            table.string('firstName')
            table.string('lastName')
            table.string('Email')
            table.string('Password')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

