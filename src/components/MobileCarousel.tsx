import "../assets/css/embla.css";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";

type Props = {
  children: JSX.Element[];
  options?: EmblaOptionsType;
};

export default function MobileCarousel({ children: slides, options }: Props) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((el, index) => (
            <div className="embla__slide" key={index}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
