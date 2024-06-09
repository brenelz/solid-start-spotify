import { sidebarPlaylists } from "~/lib/data";
import SideMenuItem from "./SideMenuItem";
import SideItemCard from "./SideItemCard";
import { AiOutlineHome, AiOutlineSearch } from "solid-icons/ai";
import { FaSolidMusic } from "solid-icons/fa";
import { BsCollectionPlay } from "solid-icons/bs";

export default function SideMenu() {
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
          <SideMenuItem href="#">
            <BsCollectionPlay class="h-6 w-6" />
            Your library
          </SideMenuItem>
        </ul>
        <ul class="pl-2">
          {sidebarPlaylists.map((playlist) => <SideItemCard playlist={playlist} />)}
        </ul>
      </div>
    </div>
  );
}