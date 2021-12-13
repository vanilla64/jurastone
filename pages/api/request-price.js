export default function (req, res) {
  const { name, email, phone } = req.body

  const nodeMailer = require('nodemailer')

  const mailData = {
    from: 'order.jurastone@gmail.com',
    // to: 'zakaz@jurastone.ru',
    // to: 'vanillaen@gmail.com',
    to: 'RStruin@gmail.com, zakaz@jurastone.ru',
    subject: `Заявка от клиента: ${name}`,
    text: 'Прошу перезвонить для уточнения просчета стоимости',
    html:
      `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Сообщение:</strong></p>
        <div>Прошу перезвонить для уточнения просчета стоимости</div>
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

  res.status(200)
}
