import "vidstack/styles/defaults.css";
import "vidstack/styles/community-skin/video.css";

import {
  MediaCommunitySkin,
  MediaOutlet,
  MediaPlayer,
  MediaPoster,
} from "@vidstack/react";

export default function VideoPlayer({ onPlay, onPause }) {
  return (
    <MediaPlayer
      title="Sprite Fight"
      src="https://content.thrivemedia.art/TürküBarNoSoundDEMO.mp4"
      aspectRatio={16 / 9}
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
