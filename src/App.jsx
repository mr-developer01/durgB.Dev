import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";

// Lazy load all components
const Header = lazy(() => import("./components/Header"));
const PersonalInfo = lazy(() => import("./components/PersonalInfo"));
const InfoSection = lazy(() => import("./components/InfoSection"));
const PersonalImageCarousel = lazy(() => import("./components/PersonalImageCarousel"));
const FamilyImageGallery = lazy(() => import("./components/FamilyImageGallery"));
const Footer = lazy(() => import("./components/Footer"));

// Simple Loader component
const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
  </div>
);

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate 5-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  const educationDetails = [
    { label: "Degree", value: "B.Tech in Computer Science" },
    {
      label: "Institution",
      value: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    },
    { label: "Year of Graduation", value: "2023" }
  ];

  const occupationDetails = [
    { label: "Profession", value: "Software Engineer" },
    { label: "Company", value: "AppsTec ERP Solutions" },
    { label: "Location", value: "Bangalore, India" }
  ];

  const familyDetails = [
    { label: "Family Type", value: "Joint" },
    { label: "Grand Paa", value: "Shree Rama Jee Manjhi" },
    { label: "Grand Father's Occupation", value: "Retired Policeman" },
    { label: "Father", value: "Shree Bishwambhar Manjhi" },
    { label: "Father's Occupation", value: "SI - Bihar Police" },
    { label: "Mother", value: "Durgavati Devi" },
    { label: "Mother's Occupation", value: "Homemaker" },
    { label: "Sister", value: "Pratibha (Married)" },
    { label: "Brother", value: "Kunal" },
    { label: "Family Values", value: "Moderate, value education and respect." },
  ];

  return (
    <Suspense fallback={<Loader />}>
      {isLoaded ? (
        <div className="bg-gray-300 min-h-screen">
          <Header />
          {/* <a href="https://drive.google.com/drive/folders/1jbb5KoVn_FkBJlWeKvb471e_Vxq8y5Ue">Docs</a> */}
          <PersonalInfo />
          <InfoSection title="Education" details={educationDetails} />
          <InfoSection title="Occupation" details={occupationDetails} />
          <PersonalImageCarousel />
          <InfoSection title="Family Details" details={familyDetails} />
          <FamilyImageGallery />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </Suspense>
  );
}

export default App;