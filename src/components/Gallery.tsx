import { useState, useEffect, useRef } from "react";
import VideoPlayer from "./VideoPlayer";

import hermsCharityRunThumb from "../assets/images/thumbnails/HermesThumb.png";
import piesbergThumb from "../assets/images/thumbnails/PiesbergThumb.png";
import thomasHenryThumb from "../assets/images/thumbnails/ThomasHenryThumb.png";
import tuerkueBarThumb from "../assets/images/thumbnails/TuerkueBarThumb.png";

const flexAspectRatio = {
  [16 / 9]: 12.75,
  [9 / 16]: 2,
};

const videos = [
  {
    title: "Hermes Charity Run",
    src: "https://content.thrivemedia.art/HermesCharityRun_DEMO.mp4",
    thumbnail: hermsCharityRunThumb,
    aspectRatio: 16 / 9,
  },
  {
    title: "Bikepark Piesberg",
    src: "https://content.thrivemedia.art/Piesberg_DEMO.mp4",
    thumbnail: piesbergThumb,
    aspectRatio: 16 / 9,
  },
  {
    title: "Thomas Henry Reel",
    src: "https://content.thrivemedia.art/ThomasHenry_DEMO.mp4",
    thumbnail: thomasHenryThumb,
    aspectRatio: 9 / 16,
  },
  {
    title: "Türkü Bar",
    src: "https://content.thrivemedia.art/TuerkueBarNoSoundDEMO.mp4",
    thumbnail: tuerkueBarThumb,
    aspectRatio: 16 / 9,
  },
];

export default function Gallery(props) {
  const [hovering, setHovering] = useState(-1);
  const [playerShowing, setPlayerShowing] = useState(-1);
  let playing = false;

  const gallery = useRef<HTMLDivElement | null>(null);

  //   const transitionDone = () =>
  //     transitionPending
  //       ? new Promise<void>((resolve) =>
  //           setInterval(() => (!transitionPending && resolve(), 100))
  //         )
  //       : Promise.resolve();

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

  function calculateFlexForRatio(ar: number) {
    if (!gallery) return 3;

    return flexAspectRatio[ar];
  }

  return (
    <div
      className="flex flex-row items-center justify-center gap-2 h-[35vmin]"
      ref={gallery}
    >
      {videos.map(({ thumbnail, src, title, aspectRatio }, i) => (
        <div
          key={i}
          className="transition-[flex] duration-500 h-full overflow-hidden rounded-xl"
          style={{
            // flex: i === hovering ? calculateFlexForRatio(aspectRatio) : 1,
            // width: i === hovering ? `${gallery.current.clientWidth / videos.length - 8 * videos.length}px` : "auto",
            // aspectRatio: i === hovering ? "16 / 9" : "auto",
          }}
          onMouseEnter={() => onMouseEnter(i)}
          onMouseLeave={() => onMouseLeave()}
        >
          {i === playerShowing ? (
            <VideoPlayer
              onPlay={() => onPlay(i)}
              onPause={() => onPause(i)}
              src={src}
              title={title}
              aspectRatio={aspectRatio}
            />
          ) : (
            // <img className="object-cover h-full w-full" src={src} />
            <img
              className="object-cover h-full w-full"
              src={thumbnail.src}
              width={thumbnail.width}
              height={thumbnail.height}
              alt={title}
            />
          )}
        </div>
      ))}
    </div>
  );
}
