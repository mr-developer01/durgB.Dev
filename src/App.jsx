import "./App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import InfoSection from "./components/InfoSection";
import PersonalImageCarousel from "./components/PersonalImageCarousel";
import FamilyImageGallery from "./components/FamilyImageGallery";
import Footer from "./components/Footer";

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
      <FamilyImageGallery />
      <Footer />
    </div>
  );
}

export default App;
