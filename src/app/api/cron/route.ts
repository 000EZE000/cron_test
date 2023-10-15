import { getFormMail, promiseApiNodemailer } from "@/config";


export async function GET(request: any) {
  try {
    console.log({ data: "vamoss1" });
    await promiseApiNodemailer(
      getFormMail({
        from: "eds",
        to: "ezequiel.ignacio.sosa@gmail.com",
        subject: "ca",
        html: "<h1>VAMOSsS </h1>",
      })
    );
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  } catch (error: any) {
    console.log({ error })
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  }
}
