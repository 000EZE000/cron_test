import { getFormMail, promiseApiNodemailer } from "@/config";

// export const config = {
//   runtime: "edge",
// };

export async function GET(request: any) {
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
}
