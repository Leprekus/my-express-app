export default async function fetchToken() {
    const options = {
      client_id: process.env.CLIENT_ID as string,
      client_secret: process.env.CLIENT_SECRET as string,
     }

    return options
}