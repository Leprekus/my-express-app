import express from 'express'
import path from 'path'
import fs from 'fs'
import { CWD } from '../utils/consts';

export default function serveStaticFiles ( req: express.Request, res: express.Response, ) {
  const urlPath = req.path.substr(1); // Remove the leading '/'
  let filePath = ''; // Assuming the files are HTML
  //const indexFile = path.join(cwd, '/index.html')
  if(req.path === '/') filePath = path.join(CWD, '/index.html')
  else filePath = path.join(CWD, urlPath + '.html')

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If the file is not found or there's an error, send a fallback response
      res.status(404).send('404 Not Found');
    } else {
      res.send(data);
    }
  });
}