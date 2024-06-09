import { JSX } from "solid-js";

type SideMenuItemProps = {
  href: string;
  children: JSX.Element;
}

export default function SideMenuItem(props: SideMenuItemProps) {
  return (
    <li>
      <a
        href={props.href}
        class="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
      >
        {props.children}
      </a>
    </li>
  );
}