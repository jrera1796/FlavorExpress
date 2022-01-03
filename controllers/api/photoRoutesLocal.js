const router = require('express').Router();
const multer = require('multer');
//===============    THIS SCRIPT IS CURRENTLY NOT IN USE     ===============
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, originalname);

    //Save as UUID plus extension
    //const ext = path.extname(file.originalname);
    //cb(null, `${uuid()}${ext}`);
  }
});

const upload = multer({ storage })

router.post('/single', upload.single('recipe_pic'), (req, res) => {
  
  return console.log("OK-LOCAL");
});

router.post('/multiple', upload.array('recipe_pic'), (req, res) => {
  return res.json({ status: 'OK-LOCAL' });
});


module.exports = router;
