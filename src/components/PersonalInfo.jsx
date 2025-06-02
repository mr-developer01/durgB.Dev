const PersonalInfo = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 text-center">
      <img
        src="g.JPG"
        alt="Profile"
        className="h-[600px] mx-auto mb-6 border-4 border-amber-900 rounded-xl"
      />
      <h2 className="text-rajul-3xl font-bold mb-2">Rahul</h2>
      <p className="text-lg text-gray-600 mb-2">
        25 years | Medium Brown | 5'6"
      </p>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Ziradei Indra Awash Surwal, Siwan, Bihar - 841245
      </p>
      <p className="text-gray-700 max-w-2xl mx-auto">
        +91 87097 06893, +91 80027 77777
      </p>
    </div>
  </section>
);

export default PersonalInfo;