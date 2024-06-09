import { Playlist } from "~/lib/data"
import PlayButton from "./PlayButton";

type PlaylistItemCardProps = {
  playlist: Playlist
}

export default function PlaylistItemCard(props: PlaylistItemCardProps) {
  return (
    <a
      href={`/playlist/${props.playlist.id}`}
      class="playlist-item flex group relative transition-all duration-300 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/30 hover:bg-zinc-500/50 focus:bg-zinc-500/50"
      data-color={props.playlist.color.dark}
      style={{ "view-transition-name": `playlist_${props.playlist.id}_box` }}
    >
      <div class="h-20 w-20">
        <img
          src={props.playlist.cover}
          alt={props.playlist.title}
          class="object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
          style={{ "view-transition-name": `playlist_${props.playlist.id}_image` }}
        />
      </div>
      <div class="font-bold block" >
        {props.playlist.title}
      </div >
      <div
        class={"absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}
        style={{ "view-transition-name": `playlist_${props.playlist.id}_play` }}
      >
        <PlayButton />
      </div>
    </a>
  );
}
