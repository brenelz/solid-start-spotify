import { action, cache, reload } from "@solidjs/router";

import { eq } from "drizzle-orm";
import { db, playlistsTable, songsTable, usersTable } from "./db";

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