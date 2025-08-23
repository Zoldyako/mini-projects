import express from 'express'
import cors from 'cors'

const app = express()
const port = 8089

const corsOptions = {
origin: ['http://localhost:5173'],
}

app.use(cors(corsOptions))

app.get("/users", (req, res) => {
    res.json({ users: ['José', 'Felipe', 'Matheus', 'Elisa', 'Maria', 'Victor', 'Bianca', 'Jessica', 'Renato'] })
})

app.listen(port, () => {
    console.log('Server started at port: http://localhost:', port)
})