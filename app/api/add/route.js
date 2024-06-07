export const dynamic = "force-dynamic";
const token = process.env.DB_TOKEN;

export async function GET(request) {
  if (!request.nextUrl.searchParams.get("todo")) {
    return new Response("Todo is blank :(", {
      status: 200,
    });
  }
  let todo = encodeURI(request.nextUrl.searchParams.get("todo"));
  const url = "https://decent-chigger-32382.upstash.io/lpush/todo/" + todo + "?_token=" + token;

  //make a get request using url

  return fetch(url, { cache: "no-store" }) 
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result);
      return new Response(result, {
        status: 200,
      });
    });
  }

