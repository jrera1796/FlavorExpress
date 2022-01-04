const router = require('express').Router();

const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();
const uuid = require('uuid');
const path = require('path')
// Configuring the AWS environment
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

//S3 Object to interface with s3 service
const s3 = new aws.S3({ apiVersion: '2006-03-01' })
//Needs AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY

//Custom version of multer that uses multers3 library
const upload = multer({
  storage: multerS3({
    s3: s3,
    //Bucket we are uploading to
    bucket: 'pj2-test-bucket',
    //Metadata for the items we are uploading, setting property to index/fieldname
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    //Filename saved as uuid + extension name
    key: (req, file, cb) => {

      //Save as UUID plus extension
      const { originalname } = file;
      const ext = path.extname(file.originalname);
      const str = `${uuid.v4()}${ext}`
      cb(null, str);
      
    }
  })
})

router.post('/single', upload.single('recipe_pic'), (req, res) => {
  return res.json({ status: 'OK-AWS', pathname: req.file.key });
});

router.post('/multiple', upload.array('recipe_pic'), (req, res) => {
  return res.json({ status: 'OK-AWS' });
});

module.exports = router;
