import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1542291026-79eddc756ec3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'F1 INSPIRED FRAMES',
    subtitle: 'Speed meets style. Sleek, innovative, and ready to move—and be seen.',
    buttonText: 'Shop now',
    alt: 'Red eyeglasses on a race track',
  },
  {
    image:
      'https://images.unsplash.com/photo-1596708453531-e40656a87754?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'ZENNI x CHASE STOKES',
    subtitle: 'Style for every scene. Effortless looks for every vibe.',
    buttonText: 'Shop collection',
    alt: 'Man smiling wearing sunglasses',
  },
  {
    image:
      'https://images.unsplash.com/photo-1543877965-0761e3861c8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'WOMEN\'S EDIT',
    subtitle: 'Discover eyewear that compliments your unique style.',
    buttonText: 'View collection',
    alt: 'Woman wearing stylish eyeglasses',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582234005697-3f98015320d7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'KIDS\' ZONE',
    subtitle: 'Durable and fun frames for your little ones.',
    buttonText: 'Shop kids',
    alt: 'Child wearing eyeglasses',
  },
  // Add more slides if you want a longer carousel with similar content
  {
    image:
      'https://images.unsplash.com/photo-1511413813928-8671f654df8c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'BLUE LIGHT BLOCKERS',
    subtitle: 'Protect your eyes from digital strain.',
    buttonText: 'Learn more',
    alt: 'Person working on a laptop with blue light glasses',
  },
];

const smallBannersSlides = [...slides, ...slides]; // Duplicating the slides array

const SmallBanners = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: 'start', skipSnaps: false, slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="flex justify-center items-center bg-gray-100 font-[Inter] py-8">
      <div className="relative w-full max-w-[95%] mx-auto">
        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {smallBannersSlides.map((slide, index) => (
              <div
                key={index}
                className="flex-[0_0_23.5%] ml-4 relative rounded-3xl overflow-hidden shadow-lg border border-gray-200"
              >
                {/* Background Image */}
                <div
                  className="h-[300px] sm:h-[350px] md:h-[400px] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  role="img"
                  aria-label={slide.alt}
                >
                  {/* Gradient overlay + content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <h2 className="text-xl md:text-2xl font-extrabold text-white mb-1 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base text-white mb-3 line-clamp-2">
                      {slide.subtitle}
                    </p>
                    <button className="w-fit bg-white text-black text-sm md:text-base px-4 py-1 md:px-6 md:py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows & Indicators - Adjusted for smaller banners */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 text-black hover:bg-opacity-100 transition-all duration-300 z-20 shadow-md hidden md:block"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white bg-opacity-70 text-black hover:bg-opacity-100 transition-all duration-300 z-20 shadow-md hidden md:block"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi.scrollTo(index)}
              className={`w-2 h-2 rounded-full mx-1 transition-colors duration-300 ${
                index === selectedIndex ? 'bg-black' : 'bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallBanners;