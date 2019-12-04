const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // address of the server
user :  'admin', // username
password :  'wildcodeschool',
database :  'christmas_list',
});
module.exports = connection;
