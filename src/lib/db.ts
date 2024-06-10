// import { drizzle } from 'drizzle-orm/better-sqlite3';
// import Database from 'better-sqlite3';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
});

// const client = new Database('./db/sqlite.db');

export const db = drizzle(client);

export const usersTable = sqliteTable('users', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    email: text('email').notNull(),
    passwordSalt: text('passwordSalt').notNull(),
    passwordHash: text('passwordHash').notNull(),
});

export const playlistsTable = sqliteTable('playlists', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer('userId').notNull().references(() => usersTable.id),
    title: text('title').notNull(),
    colorAccent: text('colorAccent').notNull(),
    colorDark: text('colorDark').notNull(),
    cover: text('cover').notNull(),
    artists: text('artists').notNull()
});

export const songsTable = sqliteTable('songs', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    playlistId: integer('playlistId').notNull().references(() => playlistsTable.id),
    title: text('title').notNull(),
    image: text('image').notNull(),
    artists: text('artists').notNull(),
    album: text('album').notNull(),
    duration: text('duration').notNull(),
});