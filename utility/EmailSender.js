const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const fs = require("fs");

async function updateTemplateHandler(templatePath, toReplaceObject) {
    let templatecontent = await fs.promises.readFile(templatePath, "utf-8"); // Await the file read

    const keyArrs = Object.keys(toReplaceObject);
    keyArrs.forEach((key) => {
        templatecontent = templatecontent.replace(`#{{${key}}}`, toReplaceObject[key]); // Corrected method name
    });

    return templatecontent;
}

async function emailSender(templatePath, recieverEmail, toReplaceObject) {
    try {
        const content = await updateTemplateHandler(templatePath, toReplaceObject);

        const sendGridDetails = {
            host: "smtp.sendgrid.net",
            port: 465,
            secure: true,
            auth: {
                user: "apikey",
                pass: process.env.SENDGRID_API_KEY
            }
        };

        const msg = {
            to: recieverEmail,
            from: 'akshit2003rawat7@gmail.com',
            subject: 'OTP',
            text: 'abc',
            html: content,
        };

        const transporter = nodemailer.createTransport(sendGridDetails);
        await transporter.sendMail(msg);
        console.log("Email sent");
    } catch (err) {
        console.log("Email not sent because of the error", err);
    }
}

module.exports = emailSender;
