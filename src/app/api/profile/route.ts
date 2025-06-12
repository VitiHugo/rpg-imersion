import db from '@/modules/db';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest){
  const params = req.nextUrl.searchParams;
  const id = params.get('id');

  const user = await db.user.findFirst({ where: { id: id } });
  return new Response(JSON.stringify(user));
};