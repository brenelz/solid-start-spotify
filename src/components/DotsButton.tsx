import { BiRegularDotsHorizontalRounded } from "solid-icons/bi";

type DotsButtonProps = {
  size?: 'md' | 'lg';
}

export default function DotsButton(props: DotsButtonProps) {
  return (
    <button
      type="button"
      class="text-gray-400 hover:text-gray-300 rounded-full flex items-center justify-center"
      classList={{ "h-12 w-12": props.size === 'md', "h-14 w-14": props.size === 'lg' }}
    >
      <BiRegularDotsHorizontalRounded class="h-8 w-8" />
    </button>
  )
}
