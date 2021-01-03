const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'abdessamadelhamdany@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    // html: '<p>Welcome to the app, ${name}. Let me know how you get along with the app.</p>'
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'abdessamadelhamdany@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Goodbye ${name}. I hope to see you back soon.`
    // html: '<p>Goodbye ${name}. I hope to see you back soon.</p>'k
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}