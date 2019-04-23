const fs = require("fs");

function loadSchemaToFile(data) {
  const Schema = `
    const mongoose = require('mongoose');
    const Schema = mongoose.schema;

    const ${data} = new Schema({
      title: {
        type: String,
        trim: true,
        required: true
      },
      { collection: '${data}' }
    });
  `
  fs.writeFileSync(`${data}.js`, Schema, err => console.log(err));
};

module.exports = loadSchemaToFile;