import { redirect } from "next/navigation";

export async function GET(request: any) {
  console.log({ dad: "adsadasdsadsadsada" });
  return new Response("dasdasdasdsad", { status: 200 });
}
