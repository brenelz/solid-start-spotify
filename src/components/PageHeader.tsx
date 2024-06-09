import { AiOutlineGithub, AiOutlineHome } from "solid-icons/ai";
import { FaSolidChevronLeft } from "solid-icons/fa";

export default function PageHeader() {
  return (
    <div
      class="relative z-10 py-4 px-6 flex justify-between"
      style={{ "view-transition-name": `page_header` }}
    >
      <a
        href="/"
        aria-label="go back to home page"
        class="bg-zinc-900 rounded-full inline-flex justify-center items-center h-8 w-8"
      >
        <FaSolidChevronLeft class="h-4 w-4 -ml-0.5" />
      </a>
      <div class="flex items-center gap-3">
        <a
          target="_blank"
          aria-label={"github repository"}
          href="#"
          class="text-gray-200 hover:text-white"
        >
          <AiOutlineGithub class="h-7 w-7" />
        </a>
      </div>
    </div>
  )
};
