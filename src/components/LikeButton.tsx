import { AiFillHeart } from "solid-icons/ai";

type LikeButtonProps = {
  size?: 'md' | 'lg';
}

export default function LikeButton(props: LikeButtonProps) {
  return (
    <button
      type="button"
      class="text-green-500 hover:scale-105 rounded-full flex items-center justify-center"
      classList={{ "h-12 w-12": props.size === 'md', "h-14 w-14": props.size === 'lg' }}
    >
      <AiFillHeart classList={{ "h-8 w-8": props.size === 'md', "h-10 w-10": props.size === 'lg' }} />
    </button>
  )
}
