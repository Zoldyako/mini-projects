import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { Pool } from 'pg'
import 'dotenv/config.js'

const app = express()
const corsOptions = { origin: ['http://localhost:5173'] }
const PORT = process.env.SERVER_PORT || 8089
const pool = new Pool({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
})
const initSql = fs.readFileSync('./mydatabase.sql', 'utf8')

await pool.on('connect', () => {
	console.log('Connected to the database!')
})
await pool.query(initSql)

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