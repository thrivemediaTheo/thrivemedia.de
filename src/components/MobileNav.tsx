import { useEffect, useState } from "react";
import { Icon } from "@iconify/react"

export default function MobileHeader() {
  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen(!open)
  }

  useEffect(() => {
    window.addEventListener("touchmove", (ev) => open ? ev.preventDefault() : true, false)
  })

  return (
    <>
      <button onClick={toggleMenu}>
        <Icon icon="jam:align-justify" className="text-primary text-4xl" />
      </button>
      <nav className={`fixed -z-10 top-0 bottom-0 ${open ? 'left-0' : 'left-full'} h-full w-full bg-secondary transition-all duration-300 ease-out`}>
        <ul className="flex flex-col justify-center mx-8 text-right gap-y-4 h-full">
          <li><a onClick={() => setOpen(false)} className="flex flex-row justify-end items-center space-x-3" title="Home" href="/#">        <Icon className="text-white text-4xl" icon="jam:home" /><span className="text-white text-6xl uppercase tracking-wide underline decoration-primary decoration-2 underline-offset-8">Home</span></a></li>
          <li><a onClick={() => setOpen(false)} className="flex flex-row justify-end items-center space-x-3" title="Services" href="/#services"><Icon className="text-white text-4xl" icon="jam:lightbulb" /><span className="text-white text-6xl uppercase tracking-wide underline decoration-primary decoration-2 underline-offset-8">Services</span></a></li>
          <li><a onClick={() => setOpen(false)} className="flex flex-row justify-end items-center space-x-3" title="About" href="/#about">   <Icon className="text-white text-4xl" icon="jam:heart" /><span className="text-white text-6xl uppercase tracking-wide underline decoration-primary decoration-2 underline-offset-8">About</span></a></li>
          <li><a onClick={() => setOpen(false)} className="flex flex-row justify-end items-center space-x-3" title="Portfolio" href="/#prevwork"><Icon className="text-white text-4xl" icon="jam:layout" /><span className="text-white text-6xl uppercase tracking-wide underline decoration-primary decoration-2 underline-offset-8">Portfolio</span></a></li>
          <li><a onClick={() => setOpen(false)} className="flex flex-row justify-end items-center space-x-3" title="Contact" href="/#contact"> <Icon className="text-white text-4xl" icon="jam:paper-plane" /><span className="text-white text-6xl uppercase tracking-wide underline decoration-primary decoration-2 underline-offset-8">Contact</span></a></li>
          <li className="flex flex-row flex-nowrap space-x-3 justify-end pt-8">
            <a
              className="cursor-pointer bg-primary rounded-full p-1 aspect-square"
              href="https://www.behance.net/theoschneidereit"
              title="Behance"
              target="_blank"
            >
              <Icon icon="jam:behance" className="h-12 w-12 text-background" />
            </a>

            <a
              className="cursor-pointer bg-primary rounded-full p-1 aspect-square"
              href="https://vimeo.com/thrivemediasolutions"
              title="Vimeo"
              target="_blank"
            >
              <Icon icon="jam:vimeo" className="h-12 w-12 text-background" />
            </a>

          </li>
        </ul>
      </nav>
    </>
  )
}
