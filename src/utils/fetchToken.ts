export default async function fetchToken() {
    const options = {
        method: 'POST',
        url: 'https://{yourDomain}/oauth/token',
        headers: {'content-type': 'application/x-www-form-urlencoded'},
        data: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: process.env.CLIENT_ID as string,
          client_secret: process.env.CLIENT_SECRET as string,
          
        })
      };
      return options
}