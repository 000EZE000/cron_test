import nodemailer from "nodemailer";
import { IFormMail } from "./type";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.API_KEY_EMAIL,
  },
});

export const getFormMail = (data: IFormMail): IFormMail => {
  return {
    from: data.from,
    to: data.to,
    subject: data.subject,
    html: data.html,
  };
};

export const promiseApiNodemailer = (prop: IFormMail) =>
  new Promise((resolve, reject) => {
    transporter.sendMail(prop, (error, info) => {
      if (error) {
        console.log({ data: "data" });
        return reject(error);
      }
      resolve(info.response);
    });
  });
