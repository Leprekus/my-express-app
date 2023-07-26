import express from 'express'
import path from 'path'
import fs from 'fs'
import { CWD } from '../utils/consts';
import createHTML from './createHTML';

export default function serveStaticFiles ( req: express.Request, res: express.Response, ) {
  
  const PAGES_DIRECTORY = CWD + '/src/pages'
  let filePath = ''; 
  
  if(req.path === '/') filePath = path.join(PAGES_DIRECTORY, '/index.html') // Assuming the files are HTML

  else filePath = path.join(PAGES_DIRECTORY, req.path + '.html')
 
  if(fs.existsSync(filePath)) {
    
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        // If the file is not found or there's an error, send a fallback response
        res.status(404).send('404 Not Found');
      } 
      else {
        res.send(data);
      }
    });
  } else if(req.path) {

    const pattern = /\[[^\]]+]\.js/;

    const splitPath = req.path.split('/')
    
    // Calculate the depth of the directory and construct the file path
    // If the directory depth is less than or equal to 2, set the file path as '/'
    // Otherwise, set the file path by joining all directory parts except the last one
    // with a '/' separator
    const reqPath = splitPath.length <= 2 ? '/' : splitPath.slice(0, splitPath.length - 1).join('/') + '/'
    
    const FOLDER_PATH = path.join(CWD, 'src/pages/' + reqPath)

    try {

      const FILES_IN_FOLDER = fs.readdirSync(FOLDER_PATH)

      const matches =  FILES_IN_FOLDER.filter((file) => pattern.test(file))
  
      if(matches.length === 0) res.status(404).send('404 Not Found');
      
      const DYNAMIC_FILEPATH = path.join(FOLDER_PATH, reqPath + matches[0])
      
      fs.readFile(DYNAMIC_FILEPATH, 'utf8', (err, data) => {
        if (err) {
          // Handle the error if the file cannot be read
          res.status(500).send('Internal Server Error')
        } else {
          // 'data' contains the contents of the file as a string
          //console.log('File content:', data);
          const entryPoint = createHTML({ script: data })
        
          res.setHeader('Content-Type', 'text/html')
    
          entryPoint.pipe(res)
        }
      });
      

    } catch(error) {

      res.status(404).send('404 Not Found')

    }


  }
}