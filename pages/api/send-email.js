export default function (req, res) {
  const { name, email, phone, message } = req.body

  const nodeMailer = require('nodemailer')

  const mailData = {
    from: 'order.jurastone@gmail.com',
    to: email,
    subject: `Заявка от клиента: ${name}`,
    text: message,
    html:
      `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон</strong> ${phone}</p>
        <p><strong>Сообщение:</strong></p>
        <div>${message}</div>
      `
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
    if(err)
      console.log(err)
    else
      console.log(info)
  })

  console.log(req.body)
  res.status(200)
}
