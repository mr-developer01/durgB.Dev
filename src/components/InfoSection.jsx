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
        {title === "Education" && (
          <a
            href="https://drive.google.com/drive/folders/1jbb5KoVn_FkBJlWeKvb471e_Vxq8y5Ue"
            className="text-blue-500 hover:underline border-2 rounded-lg px-4 py-2 inline-block mt-4 transition-colors duration-300 hover:bg-blue-100 hover:border-blue-400 hover:text-blue-700"
          >
            See Docs
          </a>
        )}
      </div>
    </div>
  </section>
);
export default InfoSection;
