
export async function GET(request: any) {
  try {
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ data: "sadasd" }), {
      status: 200,
    });
  }
}
