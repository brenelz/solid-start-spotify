import { FaSolidMusic, FaSolidTimeline } from "solid-icons/fa";
import { Index } from "solid-js";
import { songs } from "~/lib/data";
import InlineArtists from "./InlineArtists";
import { WiTime3 } from "solid-icons/wi";

export default function MusicsTable() {
  return (
    <table class="table-auto text-left min-w-full divide-y-2 divide-gray-500/30">
      <thead>
        <tr class="text-gray-300">
          <th class="font-normal px-4 py-2 whitespace-nowrap">#</th>
          <th class="font-normal px-4 py-2 whitespace-nowrap">Title</th>
          <th class="font-normal px-4 py-2 whitespace-nowrap">Album</th>
          <th class="font-normal px-4 py-2 whitespace-nowrap text-right">
            <WiTime3 class="inline-block h-5 w-5" />
          </th>
        </tr>
      </thead>
      <tbody>
        <Index each={songs}>
          {(song, index) => (
            <tr class="group hover:bg-gray-500/20">
              <td class="whitespace-nowrap px-4 py-2">{index + 1}</td>
              <td class="whitespace-nowrap px-4 py-2 flex gap-3 items-center">
                <div class="h-10 w-10">
                  <img
                    src={song().image}
                    alt={song().title}
                    class="rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                  />
                </div>
                <div class="leading-none">
                  <a
                    href="#"
                    class="text-gray-300 group-hover:text-white hover:underline text-sm"
                  >
                    {song().title}
                  </a>
                  <div class="text-sm text-gray-300 group-hover:text-white">
                    <InlineArtists artists={song().artists} />
                  </div>
                </div>
              </td>
              <td class="whitespace-nowrap px-4 py-2">
                <a
                  href="#"
                  class="text-gray-300 group-hover:text-white hover:underline text-sm"
                >
                  {song().album}
                </a>
              </td>
              <td class="whitespace-nowrap px-4 py-2 text-right">
                {song().duration}
              </td>
            </tr>
          )}
        </Index>
      </tbody>
    </table>
  )
}
