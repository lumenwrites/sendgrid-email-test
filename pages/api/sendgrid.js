// @ts-nocheck
import sgMail from '@sendgrid/mail'
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(req,res) {
  const msg = {
    to: req.body.email,
    from: 'lumenwrites@gmail.com',
    subject: 'Test email from vercel',
    text: 'This is a test email from my vercel app',
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
