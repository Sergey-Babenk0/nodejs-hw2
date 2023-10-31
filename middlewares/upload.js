const multer = require("multer");
const { join } = require("path");
const path = require("path");

const tempDir = join(__dirname, "../", "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, fileOriginalName);
  },
});

const upload = multer({
  storage: multerConfig,
});

module.exports = upload;
