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
        25 years old | medium brown | 5'6"
      </p>
      <p className="text-gray-700 max-w-2xl mx-auto">
        A passionate and driven individual looking for a life partner who shares
        similar values and aspirations.
      </p>
    </div>
  </section>
);

export default PersonalInfo;