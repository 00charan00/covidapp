import mysql from 'mysql';

const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'1030',
    database:'covidapp'
});

export default db;