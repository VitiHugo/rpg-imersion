import db from '@/modules/db';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest){
  const settings = await db.setting.findMany({orderBy: {name: 'desc'}});
  return new Response(JSON.stringify(posts));
};