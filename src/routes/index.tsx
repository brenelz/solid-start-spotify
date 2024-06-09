import { Title } from "@solidjs/meta";
import GreeetingTitle from "~/components/GreetingTitle";
import PageHeader from "~/components/PageHeader";
import PlaylistCard from "~/components/PlaylistCard";
import PlaylistItemCard from "~/components/PlaylistItemCard";
import { Layout } from "~/layouts/Layout";
import { morePlaylists, playlists } from "~/lib/data";

export default function Home() {
  return (
    <Layout>
      <Title>Home | SolidStart Spotify</Title>
      <div
        id="playlist-container"
        class="relative transition-all duration-1000 bg-context"
        style="min-height:300px;--context-color:#134e4a;"
      >
        <PageHeader />
        <div class="relative z-10 px-6">
          <GreeetingTitle />
          <div
            class="grid gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-6"
          >
            {playlists.map((playlist) => <PlaylistItemCard playlist={playlist} />)}
          </div>
        </div>
        <div
          class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80"
        >
        </div>
      </div>
      <div class="px-6 relative z-10 mt-4">
        <h2 class="text-2xl font-bold">Made for you</h2>
        <div class="flex flex-wrap mt-6 gap-4">
          {morePlaylists.map((playlist) => <PlaylistCard playlist={playlist} />)}
        </div>
      </div>
    </Layout>
  );
}
