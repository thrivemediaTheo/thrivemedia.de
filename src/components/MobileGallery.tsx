import { Video } from "../lib/gallery";
// import MobileCarousel from "./MobileCarousel";

interface Props {
  videos: Video[];
}

export default function MobileGallery({ videos }: Props) {
  return (
    /*<MobileCarousel>
      {videos.map(({ thumbnail, title }) => (
        <img
          className="object-cover w-12"
          src={thumbnail.src}
          width={thumbnail.width}
          height={thumbnail.height}
          alt={title}
        />
      ))}
    </MobileCarousel>*/
    <span>Mobile Carousel</span>
  );
}