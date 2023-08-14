import { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";

export default function Gallery(props) {
  const [hovering, setHovering] = useState(-1);
  const [playerShowing, setPlayerShowing] = useState(-1);
  let playing = false;

  //   const transitionDone = () =>
  //     transitionPending
  //       ? new Promise<void>((resolve) =>
  //           setInterval(() => (!transitionPending && resolve(), 100))
  //         )
  //       : Promise.resolve();

  const images = [];
  for (let i = 0; i < 5; i++)
    images.push(
      `https://source.unsplash.com/random/600x600?bear,seed=${i * 100}`
    );

  useEffect(() => {
    // dont show player if nothing is hovered
    if (hovering === -1) return;
    const timer = setTimeout(async () => {
      if (hovering === -1) return;
      // enable player
      setPlayerShowing(hovering);
    }, 500);
    return () => clearTimeout(timer);
  }, [hovering]);

  async function onMouseEnter(i: number) {
    // abort if section is already hovered
    if (i === hovering) return;

    // disable previous player
    if (playing) {
      playing = false;
      setPlayerShowing(-1);
    }

    console.log("mouse enter", i);
    setHovering(i);
  }

  async function onMouseLeave() {
    if (playing) return;
    console.log("mouse leave");
    setHovering(-1);
    setPlayerShowing(-1);
  }

  function onPlay(i: number) {
    console.log("playing", i);
    playing = true;
  }

  function onPause(i: number) {
    console.log("paused");
    playing = false;
  }

  return (
    <div className="flex flex-row items-center justify-center gap-2 h-[35vmin]">
      {images.map((src, i) => (
        <div
          key={i}
          className={`${
            i === hovering ? "flex-[12.5]" : "flex-[1]"
          } transition-[flex] duration-500 h-full overflow-hidden rounded-xl`}
          onMouseEnter={() => onMouseEnter(i)}
          onMouseLeave={() => onMouseLeave()}
        >
          {i === playerShowing ? (
            <VideoPlayer onPlay={() => onPlay(i)} onPause={() => onPause(i)} />
          ) : (
            <img className="object-cover h-full w-full" src={src} />
          )}
        </div>
      ))}
    </div>
  );
}
