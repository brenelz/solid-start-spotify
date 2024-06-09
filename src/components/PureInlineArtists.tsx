import { Index } from "solid-js"
import { Playlist } from "~/lib/data"

type PureInlineArtistsProps = {
    artists: string[]
}

export default function PureInlineArtists(props: PureInlineArtistsProps) {
    return (
        <Index each={props.artists}>
            {(artist, index) => (
                <>
                    {artist}
                    {index === props.artists.length - 1 ? " " : ", "}
                </>
            )}
        </Index>
    )
}