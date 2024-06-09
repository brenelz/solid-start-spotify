import { ParentProps, onMount } from "solid-js";
import SideMenu from "~/components/Side/SideMenu";

import './layout.css';
import { useBeforeLeave } from "@solidjs/router";

export function Layout(props: ParentProps) {

  const transition = function (fnStartingTheSynchronousTransition: any) {

    // In case the API is not yet supported
    // @ts-expect-error
    if (!document.startViewTransition) { return fnStartingTheSynchronousTransition() }

    // Transition the changes in the DOM
    // @ts-expect-error
    const transition = document.startViewTransition(fnStartingTheSynchronousTransition)
  }

  useBeforeLeave((e) => {

    // Stop the inmediate navigation and DOM change
    e.preventDefault()

    // Perform the action that triggers a DOM change synchronously
    transition(() => { e.retry(true) })
  });

  return (
    <>
      <div class="relative h-screen p-2 gap-2 flex items-stretch">
        <div class="w-[350px] flex-col hidden lg:flex overflow-y-auto">
          <SideMenu />
        </div>
        <div class="rounded-lg bg-zinc-900 flex-1 mx-auto overflow-y-auto">
          {props.children}
        </div>
      </div>
    </>
  )
}