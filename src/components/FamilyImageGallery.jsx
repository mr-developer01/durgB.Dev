
const FamilyImageGallery = () => {
  const images = [
    {
      src: "./papa.jpg",
      caption: "Father",
    },
    {
      src: "mom.JPG",
      caption: "Mother",
    },
    {
      src: "sister.jpg",
      caption: "Sister",
    },
    {
      src: "kunal.jpg",
      caption: "Brother",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Family Photo Gallery
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover object-center rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black opacity-65 bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <p className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyImageGallery;
