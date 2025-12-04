const { db } = require('pg');

const db = new Pool({
user: 'nanda',
host: 'localhost',
database: 'funcionarios',
password: '09072008',
port: 5432
});

module.exports = db;