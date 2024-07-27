import { interfaceTrack } from "./track";

export interface myPlaylist {
    id: number,
    playlistName: string,
    creation_date: string,
    img: string | undefined,
    musics: interfaceTrack[]
}