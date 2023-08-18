import { FC, useState } from "react";
import { Image } from "@nextui-org/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider, TrackDetails } from "keen-slider/react";

interface Props {
  images: string[];
}

export const ProductSlider: FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
  const [details, setDetails] = useState<TrackDetails | null>(null);

  //s === SLIDE <- reference to the current slide details
  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      detailsChanged(s) {
        setDetails(s.track.details);
      },
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
      created() {
        setIsContentLoaded(true);
      },
      //Array position, so 0 is gonna be the first to render
      initial: 0,
    },
    []
  );

  function scaleStyle(idx: number) {
    if (!details) return {};

    const slide = details.slides[idx];
    const scale_slide = 0.7;
    const scale = 1 - (scale_slide - scale_slide * slide.portion);
    return {
      transform: `scale(${scale})`,
      //Older Browers support (IE+9)
      WebkitTransform: `scale(${scale})`,
    };
  }

  return (
    <section aria-label="navigation-control" className="relative">
      <div ref={slideRef} className="keen-slider zoom-out cursor-grab mx-auto">
        {images.map((image, idx) => {
          const url = `/products/${image}`;
          return (
            <div key={idx} className="keen-slider__slide zoom-out__slide">
              <div style={scaleStyle(idx)}>
                <Image
                  src={url}
                  alt=""
                  className="object-cover object-center rounded-xl w-[250px] lg:w-[450px]"
                />
              </div>
            </div>
          );
        })}
      </div>
      {isContentLoaded && instanceRef.current && (
        <div className="hidden lg:flex p-2 justify-start items-start">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`border-none w-[10px] h-[10px] bg-[#c5c5c5] rounded-[50%] mx-2 p-[5px] cursor-pointer ${
                  currentSlide === idx ? "bg-danger-500" : ""
                }`}
              ></button>
            );
          })}
        </div>
      )}
    </section>
  );
};
