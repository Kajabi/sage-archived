const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);
const functions = {}

fs
  .readdirSync("./public/packs/js/")
  .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .map((file) => { functions[file.slice(0, -3)] = require(path.join(__dirname, file)) })

module.exports = functions;
