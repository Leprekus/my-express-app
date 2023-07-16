import https from 'https'

const server = https.createServer((req, res) => {
    server.on('request', (req, res)=> {
        const { method, url }  = req
        
        let body:any = []

        req.on('data',  (chunk) => body.push(chunk))
           .on('end', () => body = Buffer.concat(body).toString())

        req.on('error', (err) => console.log(err.stack))
    })
})

