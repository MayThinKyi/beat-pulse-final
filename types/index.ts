export interface Genre{
    id:number;
    name:string;
    value:string;
}

export interface IPlaylist{
    id: number;
    img: string;
    title:  string;
    playlistName:  string;
    description:  string;
    tracks: number;
}
export interface IGenrePlayist{
    id:number;
    name:string;
    value:string;
    playlists:IPlaylist[];
    songs:ISong[];
    majorArtists:IMajorArtist[];
}
export interface IMajorArtist{
    id:number;
    img:string;
    name:string;
}
export interface ISong{
    id:number;
    img:string;
    title:string;
    artist:string;
    new:boolean;
    duration:string;
    text1:string;
    text2:string;
    genres:Genre[];
}