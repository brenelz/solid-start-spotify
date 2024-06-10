import SideMenuItem from "./SideMenuItem";
import SideItemCard from "./SideItemCard";
import { AiOutlineHome, AiOutlineSearch } from "solid-icons/ai";
import { BsCollectionPlay } from "solid-icons/bs";
import { createAsync, useAction } from "@solidjs/router";
import { addPlaylist, getPlaylists } from "~/lib/api";
import { VsAdd } from "solid-icons/vs";

export default function SideMenu() {
  const addPlaylistAction = useAction(addPlaylist);
  const sidebarPlaylists = createAsync(() => getPlaylists());
  return (
    <div class="flex flex-col flex-1 gap-2">
      <div class="bg-zinc-900 rounded-lg">
        <ul>
          <SideMenuItem href="/"><AiOutlineHome class="h-6 w-6" /> Home</SideMenuItem>
          <SideMenuItem href="#"><AiOutlineSearch class="h-6 w-6" /> Search</SideMenuItem>
        </ul>
      </div>

      <div class="bg-zinc-900 rounded-lg flex-1">
        <ul>
          <li class="justify-between flex text-zinc-400 hover:text-zinc-100 ">
            <button
              class="flex gap-4 text-zinc-400 hover:text-zinc-100 py-3.5 px-5 font-semibold transition-all duration-300"
            >
              <BsCollectionPlay class="h-6 w-6" />
              Your Library
            </button>
            <button class="py-4 px-5" onClick={() => addPlaylistAction()}>
              <VsAdd />
            </button>
          </li>
        </ul>
        <ul class="pl-2">
          {sidebarPlaylists()?.map((playlist) => <SideItemCard playlist={playlist} />)}
        </ul>
      </div>
    </div>
  );
}