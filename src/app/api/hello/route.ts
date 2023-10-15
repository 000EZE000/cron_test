import { IFormMail } from "@/config/type";
import nodemailer from "nodemailer"

export async function GET(request: any) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ezequiel.ignacio.sosa@gmail.com",
        pass: "unyohrilzfebybod",
      },
    });

    const getFormMail = (data: IFormMail): IFormMail => {
      return {
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: data.html,
      };
    };

    const promiseApiNodemailer = (prop: IFormMail) =>
      new Promise((resolve, reject) => {
        transporter.sendMail(prop, (error, info) => {
          if (error) {
            console.log({ data: "data" });
            return reject(error);
          }
          resolve(info.response);
        });
      });
    const data = getFormMail({
      from: "ezequiel.ignacio.sosa@gmail.com",
      to: "ezequiel.ignacio.sosa@gmail.com",
      subject: "cron",
      html: "<h1>VAMOSsS </h1>",
    });
    const result = await promiseApiNodemailer(data);
    return new Response(JSON.stringify({ data, result }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  }
}
