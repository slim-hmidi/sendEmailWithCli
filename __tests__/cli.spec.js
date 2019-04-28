

describe('Send Email', () => {
  it('Should initialize the configuration with the given options ', async () => {
    const initTransporter = jest.fn();
    const options = {
      host: 'smtp.gmail.com',
      port: 425,
      secure: true,
      auth: {
        user: 'user',
        password: 'password',
      },
    };
    await initTransporter(options);
    expect(initTransporter).toHaveBeenCalledWith(options);
  });

  it('Should returns an error when there is a configuration problem', async () => {
    const error = 'configuration error';
    const initTransporter = jest.fn(() => error);
    const options = {};
    await initTransporter(options);
    expect(initTransporter).toHaveReturnedWith(error);
  });
  describe('Send email without an attachement', () => {
    it('Should send an email without an attachement', () => {
      const message = 'message sent successfully!';
      const sendEmailWithoutAttachement = jest.fn((transporter, answers) => {
        if (transporter && answers) {
          return message;
        }
        return false;
      });
      const transporter = true;
      const answers = {
        sender: 'user@example.com',
        receiver: 'user1@example.com',
        subject: 'test',
        emailBody: 'Test message',
      };
      sendEmailWithoutAttachement(transporter, answers);
      expect(sendEmailWithoutAttachement).toHaveReturnedWith(message);
    });

    it('Should returns an error when the is an error with the transporter', () => {
      const message = 'unable to send the email';
      const sendEmailWithoutAttachement = jest.fn((transporter, answers) => {
        if (!transporter && answers) return message;
        return true;
      });
      const transporter = false;
      const answers = {
        sender: 'user@example.com',
        receiver: 'user1@example.com',
        subject: 'test',
        emailBody: 'Test message',
      };
      sendEmailWithoutAttachement(transporter, answers);
      expect(sendEmailWithoutAttachement).toHaveReturnedWith(message);
    });

    it('Should returns an error when the is a receiver/sender is not mentioned', () => {
      const message = 'Please enter a valid email';
      const sendEmailWithoutAttachement = jest.fn((transporter, answers) => {
        if (!transporter && answers) return message;
        return true;
      });
      const transporter = false;
      const answers = {
        sender: 'user@example.com',
        subject: 'test',
        emailBody: 'Test message',
      };
      sendEmailWithoutAttachement(transporter, answers);
      expect(sendEmailWithoutAttachement).toHaveReturnedWith(message);
    });
  });

  describe('Send email with an attachment', () => {
    it('Should send an email an attachement', () => {
      const message = 'message sent successfully!';
      const sendEmailWithAttachement = jest.fn((transporter, answers) => {
        if (transporter && answers) return message;
        return false;
      });
      const transporter = true;
      const answers = {
        sender: 'user@example.com',
        receiver: 'user1@example.com',
        subject: 'test',
        emailBody: 'Test message',
        attachment: './attachment.txt',
      };
      sendEmailWithAttachement(transporter, answers);
      expect(sendEmailWithAttachement).toHaveReturnedWith(message);
    });

    it('Should returns an error when the is an error with the transporter', () => {
      const message = 'unable to send the email';
      const sendEmailWithAttachement = jest.fn((transporter, answers) => {
        if (!transporter && answers) return message;
        return true;
      });
      const transporter = false;
      const answers = {
        sender: 'user@example.com',
        receiver: 'user1@example.com',
        subject: 'test',
        emailBody: 'Test message',
        attachment: './attachment.txt',
      };
      sendEmailWithAttachement(transporter, answers);
      expect(sendEmailWithAttachement).toHaveReturnedWith(message);
    });

    it('Should returns an error when the is an attachement file path is not valid', () => {
      const message = 'Please enter a valid path for the attachement file';
      const sendEmailWithoutAttachement = jest.fn((transporter, answers) => {
        if (!transporter && answers) return message;
        return true;
      });
      const transporter = false;
      const answers = {
        sender: 'user@example.com',
        subject: 'test',
        emailBody: 'Test message',
        attachemnt: 'aaa',
      };
      sendEmailWithoutAttachement(transporter, answers);
      expect(sendEmailWithoutAttachement).toHaveReturnedWith(message);
    });
  });
});
