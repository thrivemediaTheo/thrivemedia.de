import { Video } from "../lib/gallery";
import MobileCarousel from "./MobileCarousel";

interface Props {
  videos: Video[];
}

export default function MobileGallery({ videos }: Props) {
  return (
    <MobileCarousel options={{ loop: true }}>
      {videos.map(({ thumbnail, title }) => (
        <img
          className="rounded-xl"
          src={thumbnail.src}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={title}
        />
      ))}
    </MobileCarousel>
  );
}
