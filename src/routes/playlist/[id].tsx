import { Title } from "@solidjs/meta";
import { RouteDefinition, RouteSectionProps, createAsync, useAction } from "@solidjs/router";
import { BiRegularNoEntry } from "solid-icons/bi";
import { Show } from "solid-js";
import LikeButton from "~/components/LikeButton";
import MusicsTable from "~/components/MusicsTable";
import PageHeader from "~/components/PageHeader";
import PlayButton from "~/components/PlayButton";
import { Layout } from "~/layouts/Layout"
import { deletePlaylist, getPlaylistById, getSongs } from "~/lib/api";

export const route = {
  load: ({ params }) => {
    void getPlaylistById(+params.id);
    void getSongs(+params.id);
  }
} satisfies RouteDefinition;

export default function Playlist(props: RouteSectionProps) {
  const playlist = createAsync(() => getPlaylistById(+props.params.id));
  const deletePlaylistAction = useAction(deletePlaylist);
  const songs = createAsync(() => getSongs(+props.params.id));

  return (
    <Layout>
      <Title>{playlist()?.title} | SolidStart Spotify</Title>
      <div
        class="relative bg-zinc-900 min-h-full flex flex-col overflow-x-hidden rounded-lg"
        style={{ "view-transition-name": `playlist_${playlist()?.id}_box` }}
      >
        <PageHeader />
        <div
          class="flex flex-col items-center md:flex-row md:items-stretch gap-8 px-6"
        >
          <div class="h-52 w-52 flex-none">
            <img
              src={playlist()?.cover}
              alt={playlist()?.title}
              class="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
              style={{ "view-transition-name": `playlist_${playlist()?.id}_image` }}
            />
          </div>
          <div class="flex flex-col justify-between">
            <div class="flex flex-1 items-end">Playlist</div>
            <div>
              <h1 class="title-clamp font-bold block" style={{ "view-transition-name": `playlist_${playlist()?.id}_title` }}>
                {playlist()?.title}
                <span></span>
              </h1>
            </div>
            <div class="flex-1 flex items-end">
              <div class="text-sm">
                {playlist()?.artists}
                <div class="mt-1">
                  <span class="font-semibold">58 likes</span>, 83 musics, <span
                    class="text-gray-300">about 3h 15min</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900/30 mt-6 flex-1 p-6 blur-100">
          <div class="flex gap-1 items-center">
            <PlayButton size="lg" />
            <div class="ml-4" style={{ "view-transition-name": `playlist_${playlist()?.id}_play` }}></div>
            <LikeButton size="md" />
            <Show when={songs()?.length! === 0}>
              <button onClick={() => deletePlaylistAction(playlist()!.id)}>
                <BiRegularNoEntry class="h-8 w-8" />
              </button>
            </Show>
          </div>
          <div class="px-6 pt-4">
            <Show when={playlist()}>
              <MusicsTable playlistId={playlist()!.id} />
            </Show>
          </div>
        </div >
        <div
          class="absolute h-screen inset-0 z-[-1] bg-gradient-to-b from-context"
          style={`--context-color:${playlist()?.colorAccent}`}
        >
          <img
            src={playlist()?.cover}
            alt={playlist()?.title}
            class="el-to-fade transition-all duration-500 z-[-1] absolute inset-0 mix-blend-overlay opacity-20 scale-90 w-full h-full object-cover blur-md"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t via-transparent from-zinc-900"
          >
          </div>
        </div>
      </div>
    </Layout>
  )
}