const FamilyImageGallery = () => {
  const images = [
    {
      src: "https://plus.unsplash.com/premium_photo-1682439177734-07d628bc4917?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Father",
    },
    {
      src: "https://images.unsplash.com/photo-1542037179399-bbf09c7f9888?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Mother",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681493353999-a3eea8b95e1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Sister",
    },
    {
      src: "https://images.unsplash.com/photo-1586188389405-bd05314a47ac?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
