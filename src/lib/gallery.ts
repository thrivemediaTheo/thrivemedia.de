import hermsCharityRunThumb from "../assets/images/thumbnails/HermesThumb.png";
import piesbergThumb from "../assets/images/thumbnails/PiesbergThumb.webp";
import thomasHenryThumb from "../assets/images/thumbnails/ThomasHenryThumb.png";
import tuerkueBarThumb from "../assets/images/thumbnails/TuerkueBarThumb.png";
import goeckemeyerThumb from "../assets/images/thumbnails/GoeckemeyerThumb.webp";
import goeckemeyerThumb2 from "../assets/images/thumbnails/GoeckemeyerThumb3.jpg";

export interface Video {
  title: string;
  src: string;
  thumbnail: ImageMetadata;
  aspectRatio: number;
  muted: boolean;
}

export const videos: Video[] = [
  {
    title: "Hermes Charity Run",
    src: "https://content.thrivemedia.art/HermesCharityRun_DEMO.mp4",
    thumbnail: hermsCharityRunThumb,
    aspectRatio: 16 / 9,
    muted: false,
  },
  /*{
    title: "Bikepark Piesberg",
    src: "https://content.thrivemedia.art/Piesberg_DEMO.mp4",
    thumbnail: piesbergThumb,
    aspectRatio: 16 / 9,
    muted: false,
  },*/
  {
    title: "Göckemeyer Metallbau Reel2",
    src: "https://content.thrivemedia.art/GoeckemeyerMetallbau_Reel2.mp4",
    thumbnail: goeckemeyerThumb2,
    aspectRatio: 9 / 16,
    muted: false,
  },
  {
    title: "Thomas Henry Reel",
    src: "https://content.thrivemedia.art/ThomasHenry_DEMO.mp4",
    thumbnail: thomasHenryThumb,
    aspectRatio: 9 / 16,
    muted: false,
  },
  /*{
    title: "Türkü Bar",
    src: "https://content.thrivemedia.art/TuerkueBarNoSoundDEMO.mp4",
    thumbnail: tuerkueBarThumb,
    aspectRatio: 16 / 9,
    muted: true,
  },*/
  {
    title: "Göckemeyer Metallbau Reel",
    src: "https://content.thrivemedia.art/GoeckemeyerMetallbau_Reel.mp4",
    thumbnail: goeckemeyerThumb,
    aspectRatio: 9 / 16,
    muted: false,
  },
];
