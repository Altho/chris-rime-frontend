const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

    const data = {
        to: 'alan.at.thomas@gmail.com',
        from: 'alan.at.thomas@gmail.com',
        subject: `Nouveau message de ${body.name}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    try{await mail.send(data);}
    catch(err){console.log(err)}

    res.status(200).json({ status: 'OK' });
};