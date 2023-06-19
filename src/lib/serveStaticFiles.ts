import express from 'express'
import path from 'path'
import fs from 'fs'
import { CWD } from '../utils/consts';

export default function serveStaticFiles ( req: express.Request, res: express.Response, ) {
  
  const cwd = CWD + '/src/pages'
  let filePath = ''; 
  
  if(req.path === '/') filePath = path.join(cwd, '/index.html') // Assuming the files are HTML

  else filePath = path.join(cwd, req.path + '.html')

  console.log({ filePath})

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If the file is not found or there's an error, send a fallback response
      res.status(404).send('404 Not Found');
    } else {
      res.send(data);
    }
  });
}