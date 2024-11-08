import nodemailer from "nodemailer" ;


const sendMail = async (req,res) => {

    // let testAccount = await nodemailer.createTestAccount()
    
    //connect with smtp server
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'matilde1@ethereal.email',
            pass: 'A2M1bd7VY46Rfteaac'
        }
    });


    const info = await transporter.sendMail({
        from: '"Abhijit Datta" <shimamallik31@gmail.com>', // sender address //'"name" <mail>'
        to: "abhijitdatta54321@gmail.com", // list of receivers
        subject: "Hello Kese hoo", // Subject line
        text: "Hello mello ", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);



    res.json(info)
}

export default sendMail ;