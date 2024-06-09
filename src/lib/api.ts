import { cache } from "@solidjs/router";
import { allPlaylists, morePlaylists, playlists, sidebarPlaylists, songs } from "./data";

export const getPlaylists = cache(async () => {
    "use server";
    return {
        playlists,
        morePlaylists
    }
}, "get-playlists");

export const getPlaylistById = cache(async (id: string) => {
    "use server";
    return allPlaylists.find((playlist) => playlist.id === id);
}, "get-playlists");

export const getSidebarPlaylists = cache(async () => {
    "use server";
    return sidebarPlaylists;
}, "get-sidebar-playlists");

export const getSongs = cache(async () => {
    "use server";
    return songs;
}, "get-songs");