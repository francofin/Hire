const multer = require('multer');

const imageFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      cb(null, true);
    } else {
      cb("Please upload only images.", false);
    }
  };
 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'profile-images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + 'H!re' + Date.now())
    }
});
 
const uploadFile = multer({ storage: storage, fileFilter: imageFilter });

module.exports = uploadFile;

