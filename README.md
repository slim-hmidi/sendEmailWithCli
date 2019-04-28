# sendEmailWithCli
SendEmailWithCli is an interactive application which allows a user to send an email using the command line. The user could enter the sender email, receiver email, subject and the content of his email.
If an attachement file is required, the user could enter the complete file's path.

```
$ npm run send
> send-email
? Enter sender email: user@example.com
? Enter receiver email: user@example.com
? Enter email subject: sendEmailWithCli
? Enter email body: Hello from sendEmailWithCli
? Enter the attachment file path (optional):
Email sent without an attachement successfully:  <af08896a-8e14-6f09-3091-25831d4839ee@gmail.com>

```

if you want to add an attachement to your email, you need only put the complete file path
```
$ npm run send
> send-email
? Enter sender email: user@example.com
? Enter receiver email: user@example.com
? Enter email subject: sendEmailWithCli
? Enter email body: Hello from sendEmailWithCli
? Enter the attachment file path (optional): ./attachements/attachement.txt
Email sent with an attachement successfully:  <6b6803fe-79f4-3183-1555-3f777829f942@gmail.com>
```

**Note**

In order to send emails you have to change the user and password mentioned on the env/config.js by your gmail user and password:
```
options = {
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: 'put the gmail user here',
    pass: 'put user password',
  },
};

```
After that you have to allow non secure apps to access gmail. Go to your email and change settings(https://myaccount.google.com/lesssecureapps?pli=1).

# install npm packages 
```
npm install 

```

# link the script
```
npm link

```

# unlink the script
```
npm unlink

```

# run the lint
```
npm run lint

```
# run the script
```
npm run send

```

# run tests
```
npm test

```
