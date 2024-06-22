import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "micah.turner61@ethereal.email",
    pass: "297csR9xywKvnU83Pf",
  },
});

const sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
    to: "<shaikrasheedali7@gmail.com>", // list of receivers
    subject: "Hello test from nodemailer ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello test world?</b>", // html body
  });
  res.send(info);
};

export default sendEmail;
