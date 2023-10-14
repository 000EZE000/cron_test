import { NextRequest, NextResponse } from "next/server";
// import { getFormMail, promiseApiNodemailer } from "node";

// export const config = {
//   runtime: "edge",
// };

export async function GET(request: any) {
  // Do whatever you want
  console.log({ dad: "adsadasdsadsadsada" });
  return NextResponse.json({ message: "Hello World" }, { status: 200 });
}
// export default async function handler(req: NextRequest, res: any) {
//   // await promiseApiNodemailer(
//   //   getFormMail({
//   //     from: "eds",
//   //     to: "ezequiel.ignacio.sosa@gmail.com",
//   //     subject: "ca",
//   //     html: "<h1>VAMOSsS </h1>",
//   //   })
//   // );
//   // res.status(200).send("adsdasdsadasd");
//   return new Response(JSON.stringify({ data: "sadasd" }), {
//     status: 200,
//   });
// }
