import { uploadService } from "../service/upload.service.js";
export function uploadController(req, res){
    return uploadService(req, res)

}