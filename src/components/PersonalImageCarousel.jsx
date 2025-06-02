import { useState } from "react";

const PersonalImageCarousel = () => {
  const images = [
    {
      src: "a.JPG",
      caption: "01",
    },
    {
      src: "b.JPG",
      caption: "02",
    },
    {
      src: "c.JPG",
      caption: "03",
    },
    {
      src: "e.JPG",
      caption: "04",
    },
    {
      src: "f.JPG",
      caption: "05",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">
          My Photo Carousel
        </h3>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className="w-full h-[600px] object-cover object-center"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              <p>{images[currentIndex].caption}</p>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 cursor-pointer"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalImageCarousel;
