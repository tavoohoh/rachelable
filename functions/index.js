const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

exports.submit = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }

    try {
      const { name, org, message, email } = req.body;

      const mailOptions = {
        from: email,
        replyTo: email,
        to: gmailEmail,
        subject: `Contact form: ${name}`,
        text: `From ${name}, ${email}, ${org}. Message: ${message}`,
        html: `
          <h4>From ${name}, ${email}, ${org}</h4>
          <p>${message}</p>
          <hr>
          <small style="text-align: center;">This message was sent from rachelable.com</small>
        `
      };

      mailTransport.sendMail(mailOptions);
      res.status(200).send({ isEmailSend: true });
    } catch (error) {
      res.status(500).send({ error: JSON.stringify(error) });
    }
  });
});