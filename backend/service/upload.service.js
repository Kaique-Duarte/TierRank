export function uploadService(req, res){
    return res.json({url: `http://localhost:3001/files/${req.file.filename}`})
}