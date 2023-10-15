import nodemailer from "nodemailer";
import { IFormMail } from "./type";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: {
    user: "ezequiel.ignacio.sosa@gmail.com",
    pass: "unyohrilzfebybod",
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
