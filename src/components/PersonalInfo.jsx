const PersonalInfo = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 text-center">
      <img
        src="mypic.JPG"
        alt="Profile"
        className="w-56 mx-auto mb-6 border-4 border-amber-900 rounded-xl"
      />
      <h2 className="text-rajul-3xl font-bold mb-2">Rahul</h2>
      <p className="text-lg text-gray-600 mb-4">
        25 years old | Medium Brown | 5'6"
      </p>
      <p className="text-gray-700 max-w-2xl mx-auto">
        A passionate and driven individual looking for a life partner who shares
        similar values and aspirations.
      </p>
    </div>
  </section>
);

export default PersonalInfo;