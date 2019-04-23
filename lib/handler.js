const loadSchemaToFile = require("./loadSchemaToFile");

function handler({argv}) {
  let test = 'Well, it worked for now.';
 if ( argv.c ) {
   loadSchemaToFile(argv.c);
 } 
}

module.exports = handler;