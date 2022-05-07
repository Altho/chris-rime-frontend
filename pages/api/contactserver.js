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
        to: 'chrisrime.gt@gmail.com',
        from: 'chrisrime.gt@gmail.com',
        subject: `Nouveau message de ${body.name}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    try{await mail.send(data);}
    catch(err){res.status(403).json({ status: 'Forbidden' });}

    res.status(200).json({ status: 'OK' });
};