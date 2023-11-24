const mysql = require("mysql");

// Configuration
const connection = mysql.createConnection({
    host: 'localhost',
    port: 100,
    user: 'root',
    password: '',
    database: 'demo_mySQL' // Replace with your actual database name
});

// Connect
connection.connect((error) => {
    if (error) {
        console.error("Error connecting to MySQL: " + error.stack);
        return;
    }
    console.log("Connected to MySQL as id " + connection.threadId);

    // Check if the database exists, and create it if not
    connection.query('CREATE DATABASE IF NOT EXISTS your_database_name', (err) => {
        if (err) {
            console.error("Error creating database: " + err.stack);
        } else {
            console.log("Database created or already exists");
        }
    });
});

module.exports = connection;
