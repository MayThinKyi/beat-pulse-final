import { genres } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export async  function GET(request:NextRequest){
    return NextResponse.json(genres);
}