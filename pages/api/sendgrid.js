// @ts-nocheck
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(req,res) {
  const msg = {
    to: req.body.email,
    from: 'lumenwrites@gmail.com',
    subject: 'Test email from vercel',
    text: 'Click <a href="https://rpgadventures.io/api/users/verify-magic-link?authToken=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJheW1lc3RhbGV6QGdtYWlsLmNvbSJ9.Q6nKidStNZTBuI6gGMz9aDMqjUPfx4NspRpwqiUogLY">this link</a> to sign in to your account.',
  }
  console.log('Sending email', msg)
  try {
    const response = await sgMail.send(msg)
    console.log('Email sent', msg)
    res.json({message: "Success!"})
  } catch (e) {
    console.log('Email sending error', e)
    res.json({message: "Fail!"})
  }
  
}
