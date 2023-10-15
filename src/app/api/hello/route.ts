import "dotenv/config"
import { PrismaClient } from "@prisma/client";
import { randomUUID } from "crypto";


export async function GET(request: any) {
  const prismaInit = new PrismaClient()
  try {
    const result = await prismaInit.user.create({
      data: {
        email: "ezequiel" + randomUUID(),
        name: "ezequiel"
      }
    })
    await prismaInit.$disconnect()
    return new Response(JSON.stringify({ result }), {
      status: 200,
    });
  } catch (error: any) {
    await prismaInit.$disconnect()
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  }
}
