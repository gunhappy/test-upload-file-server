var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to Node Server');
});

router.post('/upload-file', upload.single('file'), function (req, res, next) {
  console.log(req.file, 'file')
  res.send({ success: true })
})

module.exports = router;
