import { playlists } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

interface Props{
    params:{
        playlistId:string;
    }
}

export async  function GET(request:NextRequest,{params:{playlistId}}:Props){
    const playlist=playlists.filter((playlist)=>playlist?.id===Number(playlistId))[0]
    return NextResponse.json(playlist);
}