import { Playlist } from "~/lib/data"
import PlayButton from "./PlayButton"
import PureInlineArtists from "./PureInlineArtists"
import { useBeforeLeave } from "@solidjs/router"

type PlaylistCardProps = {
    playlist: Playlist
}

export default function PlaylistCard(props: PlaylistCardProps) {
    useBeforeLeave
    return (
        <a
            href={`/playlist/${props.playlist.id}`}
            class="playlist-card p-4 flex-col items-center group relative transition-all duration-300 overflow-hidden gap-5 rounded-md shadow-lg hover:shadow-xl outline-none bg-zinc-500/5 hover:bg-zinc-500/20 focus:bg-zinc-500/20"
            data-color={props.playlist.color.dark}
            style={{ "view-transition-name": `playlist_${props.playlist.id}_box` }}
        >
            <div class="w-40">
                <div class="relative group mx-auto h-40 w-full flex-none shadow-lg">
                    <img
                        src={props.playlist.cover}
                        alt={props.playlist.title}
                        class="object-cover h-full w-full rounded-md shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                        style={{ "view-transition-name": `playlist_${props.playlist.id}_image` }}

                    />
                    <div
                        class="absolute right-2 bottom-2 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all"
                        style={{ "view-transition-name": `playlist_${props.playlist.id}_play` }}
                    >
                        <PlayButton />
                    </div>
                </div>
                <div class="pt-2">
                    <div
                        class="font-bold block truncate"
                        style={{ "view-transition-name": `playlist_${props.playlist.id}_title` }}
                    >
                        {props.playlist.title}
                    </div>
                    <div class="text-gray-400 text-xs">
                        <PureInlineArtists artists={props.playlist.artists} />
                    </div>
                </div >
            </div >
        </a >
    )
};
