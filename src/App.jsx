import { useState } from "react";
import "./App.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="sm:text-2xl font-bold">durgB.Dev</h1>
          <nav className="space-x-4">
            <button
              onClick={openModal}
              className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer"
            >
              Connect
            </button>
          </nav>
        </div>
      </header>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 sm:mx-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Connect with Me
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-600 hover:text-gray-800 text-2xl"
              >
                &times;
              </button>
            </div>
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const PersonalInfo = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 text-center">
      <img
        src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-center object-cover"
      />
      <h2 className="text-rajul-3xl font-bold mb-2">Rahul</h2>
      <p className="text-lg text-gray-600 mb-4">
        25 years old | Hindu | Bangalore, India
      </p>
      <p className="text-gray-700 max-w-2xl mx-auto">
        A passionate and driven individual looking for a life partner who shares
        similar values and aspirations.
      </p>
    </div>
  </section>
);

const InfoSection = ({ title, details }) => (
  <section className="py-8">
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {details.map((detail, index) => (
          <div key={index} className="mb-4">
            <span className="font-medium text-gray-800">{detail.label}: </span>
            <span className="text-gray-600">{detail.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PersonalImageCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517887433267-127c316d81a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me at a conference",
    },
    {
      src: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me hiking in the hills",
    },
    {
      src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me at a family event",
    },
    {
      src: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me at work",
    },
    {
      src: "https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me at a friend's wedding",
    },
    {
      src: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me during a vacation",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661374927471-24a90ebd5737?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me at a cultural fest",
    },
    {
      src: "https://images.unsplash.com/photo-1691335053993-c9ba8cfd65e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me with colleagues",
    },
    {
      src: "https://images.unsplash.com/photo-1691335053879-02096d6ee2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me at a charity event",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681822348509-8bba30584da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Me celebrating Diwali",
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
              className="w-full h-[500px] object-cover object-center"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
              <p>{images[currentIndex].caption}</p>
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

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

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6">
    <div className="container mx-auto px-4 text-center">
      <p>© 2025 My Matrimonial Profile. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#" className="hover:text-gray-300">
          Privacy Policy
        </a>
        <a href="#" className="hover:text-gray-300">
          Terms of Service
        </a>
        <a href="#" className="hover:text-gray-300">
          Contact Me
        </a>
      </div>
    </div>
  </footer>
);

function App() {
  const educationDetails = [
    { label: "Degree", value: "B.Tech in Computer Science" },
    {
      label: "Institution",
      value: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    },
    { label: "Year of Graduation", value: "2023" },
    {
      label: "Additional Certifications",
      value: "Full Stack Development",
    },
  ];

  const occupationDetails = [
    { label: "Profession", value: "Software Engineer" },
    { label: "Company", value: "AppsTec ERP Solutions" },
    { label: "Location", value: "Bangalore, India" },
    { label: "Experience", value: "Intern" },
  ];

  const familyDetails = [
    { label: "Family Type", value: "Joint" },
    { label: "Father's Occupation", value: "SI - Bihar Police" },
    { label: "Mother's Occupation", value: "Homemaker" },
    { label: "Sister", value: "Pratibha (Married)" },
    { label: "Brother", value: "Kunal" },
    { label: "Family Values", value: "Moderate, value education and respect" },
  ];

  return (
    <div>
      <Header />
      <PersonalInfo />
      <InfoSection title="Education" details={educationDetails} />
      <InfoSection title="Occupation" details={occupationDetails} />
      <PersonalImageCarousel />
      <InfoSection title="Family Details" details={familyDetails} />
      {/* <EmailGallery /> */}
      <FamilyImageGallery />
      <Footer />
    </div>
  );
}

export default App;
