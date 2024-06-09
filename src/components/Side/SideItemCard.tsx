import { Playlist } from "~/lib/data"
import PureInlineArtists from "../PureInlineArtists"

type SideitemCardProps = {
  playlist: Playlist
}

export default function SideItemCard(props: SideitemCardProps) {
  return (
    <a
      href={`/playlist/${props.playlist.id}`}
      class="playlist-item flex group relative p-2 overflow-hidden items-center gap-5 rounded-md shadow-lg hover:shadow-xl outline-none hover:bg-zinc-500/10 focus:bg-zinc-500/50"
      data-color={props.playlist.color.dark}
    >
      <div class="h-12 w-12 flex-none">
        <img
          src={props.playlist.cover}
          alt={props.playlist.title}
          class="object-cover rounded h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
        />
      </div>
      <div class="flex flex-auto flex-col truncate">
        <div class="font-semibold w-full flex-none truncate">
          {props.playlist.title}
        </div>
        <div class="text-gray-400 text-sm truncate flex-1">
          <PureInlineArtists artists={props.playlist.artists} />
        </div>
      </div>
    </a>

  )
}