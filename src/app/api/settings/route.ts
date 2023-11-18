import db from '@/modules/db';
import { Setting } from '@prisma/client';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest){
  const settings = await db.setting.findMany({orderBy: {name: 'desc'}});
  return new Response(JSON.stringify(settings));
};

export async function POST(req: NextRequest){
  const ent = {
    name: 'Feywild',
    description: 'Feywild',
    modifiedBy: 'Darkus',
    status: true,
  } as Setting;

  const setting = await db.setting.create({data: ent});
  console.log(setting)

  return new Response(JSON.stringify(setting));
};