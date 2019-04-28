const fs = require('fs');
// email validation regexp
module.exports.emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// check the file's existance
module.exports.isExist = (path) => {
  if (path && fs.existsSync(path)) {
    return true;
  }
  return false;
};
