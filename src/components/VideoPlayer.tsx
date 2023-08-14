import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

export default function VideoPlayer({
  onPlay,
  onPause,
  src = "https://content.thrivemedia.art/TürküBarNoSoundDEMO.mp4",
  title = "Thrive Media Video",
  aspectRatio = 16 / 9,
}) {
  return (
    <MediaPlayer
      autoplay
      title={title}
      src={src}
      aspectRatio={aspectRatio}
      crossorigin=""
      onPlay={onPlay}
      onPause={onPause}
    >
      <MediaOutlet>
        <MediaPoster alt="Girl walks into sprite gnomes around her friend on a campfire in danger!" />
      </MediaOutlet>
      <MediaCommunitySkin />
    </MediaPlayer>
  );
}
