const express = require('express');
const app = express();
const port = 3000;

const config = { 
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql2');

const connection = mysql.createConnection(config);

let createTablePeople = `CREATE TABLE IF NOT EXISTS people2
        (id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(255), address VARCHAR(255))`;

connection.query(createTablePeople, (error, results, fields) => {
    if (error) {
        throw error
    };

    console.log('Table created')
});

app.get('/', async (req,res) => {
    const RANDOM = Math.floor(Math.random() * 10);

    const sql = `INSERT INTO people2(name) values('Leonardo ${RANDOM} Sofiati')`
    connection.query(sql)

    let tableUsers = '<table><thead><tr><th>#</th><th>Name</th></tr></thead><tbody>';

    const getUsers = `SELECT id, name FROM people2`;

    connection.query(getUsers, (error, results, fields) => {
        if (error) {
            throw error
        };

        for(let people of results) {  
            tableUsers += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
        };


        tableUsers += '</tbody></table>';

        res.send('<h1>Full Cycle Rocks! </h1><br/>'+ tableUsers)
    });

    connection.end()
    
})

app.listen(port,  () => {
    console.log(`Rodando na porta ${port}`)
})