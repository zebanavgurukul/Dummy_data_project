const express = require("express");
const project = express();
const projectDB   = require("../model/projectDB")
const faker = require ('faker')

// 1
project.post('/postdata',(req,res) => {
    list = []
    for (let i = 1; i <= 1000; i++){
        let ID = i
        let fname = faker.name.firstName()
        let lname = faker.name.lastName()
        let randomEmail = faker.internet.email()
        let password = faker.internet.password()
        var insertdata = {
            ID : ID,
            firstName : fname,
            lastName : lname,
            Email : randomEmail,
            Password : password
        }
        list.push(insertdata)
            console.log(list)
    }
    var data = projectDB.post_data(list)
    data.then(()=>{
    }).catch((err) => {
        res.send(err)
    })
    res.send(list)
});

module.exports = project
