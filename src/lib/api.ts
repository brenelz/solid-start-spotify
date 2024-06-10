import { action, cache, redirect } from "@solidjs/router";
import { eq } from "drizzle-orm";
import { db, playlistsTable, songsTable, usersTable } from "./db";
import { colors } from "./colors";
import { playlists } from "./data";

export const getUser = cache(async () => {
    'use server';
    const users = await db.select().from(usersTable).where(eq(usersTable.id, 1))

    return users[0];
}, "get-user");

export const getPlaylistById = cache(async (id: number) => {
    "use server";

    const playlists = await db.select().from(playlistsTable).where(eq(playlistsTable.id, id))

    return playlists[0];
}, "get-playlists");

export const getPlaylists = cache(async () => {
    "use server";

    const user = await getUser();

    return db.select().from(playlistsTable).where(eq(playlistsTable.userId, user.id))
}, "get-sidebar-playlists");

export const getSongs = cache(async (playlistId: number) => {
    "use server";

    return db.select().from(songsTable).where(eq(songsTable.playlistId, playlistId))
}, "get-songs");

export const addPlaylist = action(async () => {
    "use server";

    const user = await getUser();
    const existingPlaylists = await getPlaylists();
    const num = existingPlaylists.length + 1

    const randomPlaylist = playlists[playlists.length * Math.random() << 0]

    await db.insert(playlistsTable).values({
        userId: user.id,
        title: "My Playlist " + num,
        colorAccent: randomPlaylist.color.accent,
        colorDark: randomPlaylist.color.dark,
        cover: randomPlaylist.cover,
        artists: randomPlaylist.artists
    })
}, "add-playlist");

export const deletePlaylist = action(async (id: number) => {
    "use server";

    await db.delete(playlistsTable).where(eq(playlistsTable.id, id));

    return redirect('/');
}, "delete-playlist");