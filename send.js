#! /usr/bin/env node

const inquirer = require('inquirer');
const { options } = require('./env/config');
const questions = require('./utils/questions');
const {
  sendEmailWithAttachment,
  sendEmailWithoutAttachment,
  initTransporter,
} = require('./utils/emailUtils');


inquirer
  .prompt(questions)
  .then(async (answers) => {
    const {
      attachment,
    } = answers;
    try {
      const transporter = await initTransporter(options);

      // check if the connection config is ok and the attachement is empty
      if (transporter && !attachment.length) {
        const emailSent = await sendEmailWithoutAttachment(transporter, answers);
        console.log('Email sent without an attachement successfully: ', emailSent);
        return emailSent;
      }

      // check if the connection config is ok and the attachement is not empty
      if (transporter && attachment.length) {
        const emailSent = await sendEmailWithAttachment(transporter, answers);
        console.log('Email sent with an attachement successfully: ', emailSent);
        return emailSent;
      }
      console.error('Error with connection configuration: ', transporter);
      return false;
    } catch (error) {
      return error;
    }
  });
