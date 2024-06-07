export const dynamic = "force-dynamic";
const token = process.env.DB_TOKEN;

const url = "https://decent-chigger-32382.upstash.io/lrange/todo/0/100?_token=" + token;
export async function GET(request) {
 //fetch data from upstash

  return await fetch(url,{  cache: "no-store"  // Revalidate every 60 seconds
  }) 
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result);
      return new Response(result, {
        status: 200,
      });
    });

}
