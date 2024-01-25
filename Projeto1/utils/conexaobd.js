var pg = require('pg')
const conString = 'postgres://postgres:admin@localhost/agenda'
const pool = new pg.Pool({connectionString: conString})
module.exports = pool