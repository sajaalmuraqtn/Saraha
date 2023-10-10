import multer from "multer";
import { nanoid } from 'nanoid'

 function  fileUpload (){
    
    const storage=multer.diskStorage({ });

    function fileFilter(req,file,cb){
        if (['image/jpeg','image/png','image/webp'].includes(file.mimetype)) {
            cb(null,true);
        } else {
            cb('invalid format',false);
            
        }
    }
   const upload=multer({fileFilter:fileFilter,storage:storage});
    return upload;

}
export default fileUpload;