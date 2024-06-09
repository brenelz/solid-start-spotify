import { BsPlayFill } from "solid-icons/bs";

type PlayButtonProps = {
  size?: string;
}

export default function PlayButton(props: PlayButtonProps) {
  return (
    <span
      class="bg-green-500 hover:scale-105 shadow-md shadow-black/40 rounded-full flex items-center justify-center text-black"
      classList={{ "h-12 w-12": props.size === 'md', "h-14 w-14": props.size === 'lg' }}
    >
      <BsPlayFill classList={{ "h-8 w-8": props.size === 'md', "h-10 w-10": props.size === 'lg' }} />
    </span>
  )
}

