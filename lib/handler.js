const loadSchemaToFile = require("./loadSchemaToFile");

function handler({argv}) {
  // Well, basically for now, this is the only argument...
 if ( argv.c ) {
   loadSchemaToFile(argv.c);
 } 
}

module.exports = handler;