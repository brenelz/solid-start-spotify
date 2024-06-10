import { Index } from "solid-js";
import { WiTime3 } from "solid-icons/wi";
import { createAsync, useAction } from "@solidjs/router";
import { addSong, deleteSong, getSongs } from "~/lib/api";
import { BiRegularNoEntry } from "solid-icons/bi";

type MusicsTableProps = {
  playlistId: number;
}

export default function MusicsTable(props: MusicsTableProps) {
  const songs = createAsync(() => getSongs(props.playlistId));
  const addSongAction = useAction(addSong);
  const deleteSongAction = useAction(deleteSong);

  return (
    <>
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
          <Index each={songs()}>
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
                      {song().artists}
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
                  <button class="mr-4 align-middle" onClick={() => deleteSongAction(song()!.id)}>
                    <BiRegularNoEntry class="h-4 w-4" />
                  </button>

                  {song().duration}
                </td>
              </tr>
            )}
          </Index>
        </tbody>
      </table>
      <p class="mt-4">
        <button onClick={() => addSongAction(props.playlistId)} class="p-2 bg-green-500 shadow-md shadow-black/40 flex items-center justify-center text-black font-semibold">Add Song</button>
      </p >
    </>
  )
}
