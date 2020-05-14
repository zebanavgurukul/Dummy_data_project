const knex = require("../knexFile"); 

// 1
let post_data = (insertdata) => {
    return knex('post_user').insert(insertdata)
};

module.exports = {post_data} 