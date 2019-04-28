const { createTransport } = require('nodemailer');


module.exports.initTransporter = async (transporterOptions) => {
  // create transporter
  const transporter = createTransport(transporterOptions);
  // verify the connection configuration
  const config = await transporter.verify();
  if (!config) {
    return config;
  }
  return transporter;
};

/**
 * Send an email without an attachement
 * @param {object} transporter - Nodemailer transporter object
 * @param  {...any} answers - User answers
 */
module.exports.sendEmailWithoutAttachment = async (transporter, answers) => {
  const {
    sender,
    receiver,
    subject,
    emailBody,
  } = answers;

  try {
    // send email
    const sentEmail = await transporter.sendMail({
      from: sender,
      to: receiver,
      subject,
      text: emailBody,
    });

    return sentEmail.messageId;
  } catch (error) {
    return error;
  }
};

/**
 * Send an email with attachement
 * @param {object} transporter - Nodemailer transporter object
 * @param  {...any} answers - User answers
 */
module.exports.sendEmailWithAttachment = async (transporter, answers) => {
  const {
    sender,
    receiver,
    subject,
    emailBody,
    attachment,
  } = answers;

  try {
    const sentEmail = await transporter.sendMail({
      from: sender,
      to: receiver,
      subject,
      text: emailBody,
      attachments: [
        {
          path: attachment,
        },
      ],
    });
    return sentEmail.messageId;
  } catch (error) {
    return error;
  }
};
