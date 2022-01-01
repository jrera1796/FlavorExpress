const router = require('express').Router();
const multer = require('multer');
const Recipe = require('../../models/Recipe');
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
    console.log(req.file.path)

    Recipe.update({
            photo_path: req.file.path
        }, {
            where: { id: 1 }
        })
        .then(photoData => {
            if (!photoData) {
                res.status(404).json({ message: 'Error' });
            }
            res.json(photoData);
        })
        .catch(err => { res.status(500).json(err); });

    return console.log("Photo has been uploaded");
});

router.post('/multiple', upload.array('recipe_pic'), (req, res) => {
    return res.json({ status: 'OK-LOCAL' });
});


module.exports = router;