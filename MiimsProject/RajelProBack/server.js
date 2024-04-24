const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

// require('dotenv').config()

const app = express()

app.use(cors())

app.listen(8082, () => {
    console.log('Server Connect')
})

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'newtest'
})

app.get('/', (req, res) => {
    return res.json('From backend')
})

app.get('/get', (req, res) => {
    const sql = "SELECT * FROM tableuuuux"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})