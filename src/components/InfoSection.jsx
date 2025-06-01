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
export default InfoSection;
