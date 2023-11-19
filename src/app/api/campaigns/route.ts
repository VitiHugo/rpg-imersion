import db from "@/modules/db";
import { Campaign } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(){
  const campaigns = await db.campaign.findMany({orderBy: {name: 'desc'}});
  return new Response(JSON.stringify(campaigns));
};

export async function POST () {
  try {
    
    // const ent = {
    //   name: 'Strixhaven 1 Ano',
    //   description: 'Strixhaven 1 Ano',
    //   modifiedBy: 'Darkus',
    // } as Campaign
    
    // const camp = await db.campaign.create({data: ent});
    
    // console.log(camp)

    // return new Response(JSON.stringify(camp))
    
  } catch (err) {
    console.log(err)
    return NextResponse.json({messgae: err.message},{status: 500});
  }
}