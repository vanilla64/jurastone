export default function (req, res) {
  const { name, email, phone, message } = req.body

  const nodeMailer = require('nodemailer')

  const mailData = {
    from: 'order.jurastone@gmail.com',
    to: email,
    subject: `Заявка от клиента: ${name}`,
    text: message,
    html: <div>{ message }</div>
  }

  const transporter = nodeMailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'order.jurastone@gmail.com',
      pass: 'Roboweb555Roboweb',
    },
    secure: true,
  })

  transporter.sendMail(mailData, (err, info) => {
    if(err) return console.log(err)

    console.log(info)
  })

  res.status(200)
  console.log(req.body)
}
