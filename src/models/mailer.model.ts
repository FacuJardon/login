import nodemailer, {SendMailOptions} from 'nodemailer';

class Mailer {
    private transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
          user: 'login@gmail.com',
          pass: 'password'
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    private messageConfig:SendMailOptions = {
      from: "login@gmail.com",
      subject: 'Login app.',
      to: "",
      text: "",
    }

    sendMail(text:string, to:string) {
        this.messageConfig.text = text;
        this.messageConfig.to = to;

        this.transporter.sendMail(this.messageConfig, function(error, info){
            if (error)
                console.log('Mailer: ['+error+']');
          });
    }
}

export default new Mailer();