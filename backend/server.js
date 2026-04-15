import express from 'express'
import cors from 'cors'
import uploadRouter  from './routes/uploadRoutes.js'
const app = express()
const port = 3001
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json())
app.use('/upload', uploadRouter)

app.listen(port, ()=>{
    console.log(`Server Iniciado na Porta ${port}`)
})