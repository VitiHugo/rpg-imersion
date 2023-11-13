import type { NextApiRequest, NextApiResponse } from 'next'

export default async function(_req: NextApiRequest, res: NextApiResponse){
  console.log('red', _req)

  return res.status(200);
};