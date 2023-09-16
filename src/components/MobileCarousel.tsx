// import "../embla.css";
// import useEmblaCarousel from "embla-carousel-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, TrackDetails } from "keen-slider/react";

interface Props {
  children: JSX.Element[];
}

export default function MobileCarousel({ children }: Props) {
  //   const [emblaRef] = useEmblaCarousel();

  //   return (
  //     <div className="embla" ref={emblaRef}>
  //       <div className="embla__container">
  //         <div className="embla__slide">Slide 1</div>
  //         <div className="embla__slide">Slide 2</div>
  //         <div className="embla__slide">Slide 3</div>
  //       </div>
  //     </div>
  //   );
  const [sliderRef] = useKeenSlider<HTMLDivElement>({});

  return (
    <div ref={sliderRef} className="keen-slider">
      {children.map((c, idx) => (
        <div key={idx} className="keen-slider__slide">
          {c}
        </div>
      ))}
    </div>
  );
}
