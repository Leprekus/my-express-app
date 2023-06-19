import express from 'express'
import path from 'path'
import fs from 'fs'
const app = express()

// req, res, next params
const cwd = process.cwd()

app.use(express.static(path.join(cwd, 'src/static')))

app.get('*', (req: express.Request, res: express.Response) => {
  const urlPath = req.path.substr(1); // Remove the leading '/'
  let filePath = ''; // Assuming the files are HTML
  //const indexFile = path.join(cwd, '/index.html')
  if(req.path === '/') filePath = path.join(cwd, '/index.html')
  else filePath = path.join(cwd, urlPath + '.html')

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If the file is not found or there's an error, send a fallback response
      res.status(404).send('404 Not Found');
    } else {
      res.send(data);
    }
  });
})


// app.get('/', (req: express.Request, res: express.Response) => {

//     res.sendFile(indexFile)
    
// })

app.listen(3000)
