import type { NextFunction, Request, Response } from 'express';

function decodeCredentials(authHeader: string) {
  // authHeader: Basic YWRtaW46YWRtaW4=
  const encodedCredentials = authHeader
    .trim()
    .replace(/Basic\s+/i, '');

  const decodedCredentials = atob(encodedCredentials);

  return decodedCredentials.split(':');
}

export function authMiddleware(req: Request, res: Response, next: NextFunction){
  const auth = req.headers.authorization
  const [username, password] = decodeCredentials(auth || '')

  if(username === process.env.ADMIN_USER && password === process.env.ADMIN_PASSWORD){
    next()
    return;
  }
  res.set('WWW-Authenticate', 'Basic realm="admin_pages"');
  res.status(401).send("Authorization Required")
}