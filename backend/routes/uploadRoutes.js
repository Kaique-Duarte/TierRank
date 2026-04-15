import express, { json } from 'express'

const router = express.Router()

router.post('/', (req,res) =>{
    let resposta = req.body
    console.log(resposta)
    res.send(`200 ok ${resposta}`)
})

export default router