import express from 'express'
import multer from 'multer'
import cors from 'cors'

import uploadRouter  from './routes/uploadRoutes.js'
const app = express()
const port = 3001


app.use(cors({origin: 'http://127.0.0.1:3000'}))
app.use(express.json())
app.use('/files', express.static('backend/uploads'))
app.use('/upload', uploadRouter)





app.listen(port, ()=>{
    console.log(`Server Iniciado na Porta ${port}`)
})