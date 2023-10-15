import { getFormMail, promiseApiNodemailer } from "@/config";

export async function GET(request: any) {
  try {
    const data = getFormMail({
      from: "eds",
      to: "ezequiel.ignacio.sosa@gmail.com",
      subject: "ca",
      html: "<h1>VAMOSsS </h1>",
    });
    const result = await promiseApiNodemailer(data);
    return new Response(JSON.stringify({ data, result }), {
      status: 200,
    });
  } catch (error: any) {
    console.log({ error });
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  }
}
