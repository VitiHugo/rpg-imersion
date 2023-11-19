import db from '@/modules/db';
import { CharacterType, Setting } from '@prisma/client';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest){
  const charTypes = await db.characterType.findMany({orderBy: {name: 'desc'}});
  return new Response(JSON.stringify(charTypes));
};

export async function POST(req: NextRequest){
  // const ent = {
  //   name: 'Player Character',
  //   modifiedBy: 'Darkus',
  //   status: true,
  // } as CharacterType;

  // const setting = await db.characterType.create({data: ent});
  // console.log(setting)

  // return new Response(JSON.stringify(setting));
};