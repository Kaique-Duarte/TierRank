import express from 'express'
import multer from 'multer'
import { uploadController } from '../controller/uploadController.js'
import { storage } from '../config/multerConfig.js'
const router = express.Router()
const uploadImage = multer({ storage: storage})
router.post('/images', uploadImage.single('image'), (req,res) =>{
    return uploadController(req, res)


})

export default router