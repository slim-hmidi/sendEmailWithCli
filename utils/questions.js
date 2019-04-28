const {
  emailRegExp,
  isExist,
} = require('./devUtils');

module.exports = [
  {
    type: 'input',
    name: 'sender',
    message: 'Enter sender email:',
    validate: (value) => {
      const pass = value.match(emailRegExp);
      if (pass) {
        return true;
      }
      return 'Please enter a valid email';
    },
  },
  {
    type: 'input',
    name: 'receiver',
    message: 'Enter receiver email:',
    validate: (value) => {
      const pass = value.match(emailRegExp);
      if (pass) {
        return true;
      }
      return 'Please enter a valid email';
    },
  },
  {
    type: 'input',
    name: 'subject',
    message: 'Enter email subject:',
  },
  {
    type: 'input',
    name: 'emailBody',
    message: 'Enter email body:',
  },
  {
    type: 'input',
    name: 'attachment',
    message: 'Enter the attachment file path (optional):',
    validate: (value) => {
      if (value && !isExist(value)) {
        return 'Please enter a valid path for the attachement file';
      }
      return true;
    },
  },
];
