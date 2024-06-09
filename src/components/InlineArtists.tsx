import { Index } from "solid-js";

type InlineArtistsProps = {
  artists: string[];
}

export default function InlineArtists(props: InlineArtistsProps) {
  return (
    <Index each={props.artists} >
      {(artist, index) => (
        <>
          <a href={"#"} class="hover:underline">
            {artist()}
          </a>
          <span class="text-gray-300">
            {index === props.artists.length - 1 ? " " : ", "}
          </span>
        </>
      )}
    </Index>
  )
}