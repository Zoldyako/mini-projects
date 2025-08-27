import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import pool from './config/db.js'

const app = express()
const corsOptions = { origin: ['http://localhost:5173'] }
const PORT = process.env.SERVER_PORT || 8089


app.use(cors(corsOptions))

app.get('/', async (req, res) => {
	const db = await pool.query('SELECT current_database()')
	res.send(`The database name is: ${db.rows[0].current_database}`)
})

app.get('/users', (req, res) => {
    res.json({ users: ['José', 'Felipe', 'Matheus', 'Elisa', 'Maria', 'Victor', 'Bianca', 'Jessica', 'Renato'] })
})

app.listen(PORT, () => {
    console.log(`Server started at port: http://localhost:${PORT}`)
})