import { useState, useEffect, useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import { Video } from "../lib/gallery";

interface Props {
  videos: Video[];
}

export default function Gallery({ videos }: Props) {
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

    const videoCount = videos.length;
    const containerWidth = gallery.current.clientWidth,
      containerHeight = gallery.current.clientHeight;
    const gap = 8;

    const containerGapWidth = videoCount * gap - gap;
    const availableWidth = containerWidth - containerGapWidth;
    const containerGapWidthP = containerGapWidth / containerWidth;

    console.table({
      containerGapWidth,
      containerGapWidthP,
      availableWidth,
    });

    // // baseGrowthFactor = 4 means every of the 4 videos has flex-1
    // // if one has 2 its 5
    // const baseGrowthFactor = videoCount; // 4
    // const widthFactor = 100 / baseGrowthFactor;
    // // expectedWidth is accurate for flex-1 (px)
    // const expectedWidth = availableWidth * (widthFactor / 100);

    // // wenn man ein von 4 video auf flex-2 setzt, bekommt es 40% der breite (3 * flex 1 + 1 * flex-2 = 5 (total flexes) -> 100 / 5 = 20 (base width)) und der rest 20%
    // // 3 * flex-1 + 1 * flex-x = y | y equals total flexes
    // // 100 / y = a | a equals size of el in percent (to parent)

    // console.table({ baseGrowthFactor, widthFactor, expectedWidth });

    // what to do now:
    // calc the expected px width for the given ar and height of the container
    const growWidthPx = containerHeight * ar;

    // calc the expected % width of the available width
    const growWidthP = growWidthPx / availableWidth,
      growWidthFactor = growWidthP * 100;

    console.table({
      growWidthPx,
      growWidthP,
      growWidthFactor,
    });

    // bsp: insg 4, für 1 werden ~75% gebraucht
    // 3 * flex-1 + 1 * flex-x = y
    // 100 / y = z
    // z ist die breite der anderen elemente in %
    // 25% sind für andere verfügbar, also müssen gleich aufgeteilt werden
    // 25 / 3

    const availableWidthForOthers = 100 - growWidthFactor - containerGapWidthP;
    const widthForEachOfOthers = availableWidthForOthers / (videoCount - 1);
    const totalFlexCount = 100 / widthForEachOfOthers;
    const targetFlex = totalFlexCount - videoCount + 1;

    console.table({ totalFlexCount, widthForEachOfOthers, targetFlex });

    return targetFlex;
  }

  return (
    <div
      className="flex flex-row items-center justify-center gap-2 h-[35vmin]"
      ref={gallery}
    >
      {videos.map(({ thumbnail, src, title, aspectRatio, muted }, i) => (
        <div
          key={i}
          className="transition-[flex] duration-500 h-full overflow-hidden rounded-xl"
          style={{
            flex: i === hovering ? calculateFlexForRatio(aspectRatio) : 1,
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
              muted={muted}
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
