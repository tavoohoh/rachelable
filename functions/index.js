const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password
  }
});

exports.health = functions.https.onRequest((req, res) => {
  res.status(200).send({ health: 'Just fine' });
});

exports.contact = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }

    try {
      const { name, org, message, email } = req.body;

      const mailOptions = {
        from: email,
        replyTo: email,
        to: functions.config().gmail.email, // functions.config().contact.email
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
