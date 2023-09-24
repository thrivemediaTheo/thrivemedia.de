import type { Video } from "../../lib/gallery";
import MobileCarousel from "../portfolio/MobileCarousel";

interface Props {
  videos: Video[];
}

export default function MobileGallery({ videos }: Props) {
  return (
    <MobileCarousel options={{ loop: true, axis: 'y' }}>
      {videos.map(({ thumbnail, title }, i) => (
        <img
          className="rounded-xl h-auto max-h-full object-contain w-auto mx-auto"
          src={thumbnail.src}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={title}
          key={i}
        />
      ))}
    </MobileCarousel>
  );
}
