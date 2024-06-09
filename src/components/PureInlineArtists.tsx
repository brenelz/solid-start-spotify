import { Index } from "solid-js"

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