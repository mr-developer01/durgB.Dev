import { useState } from "react";
import emailjs from "@emailjs/browser";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", type: "" });

  const openModal = () => {
    setIsModalOpen(true);
    setStatus({ message: "", type: "" }); // Reset status on modal open
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", message: "" }); // Reset form
    setStatus({ message: "", type: "" }); // Reset status
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ message: "Please fill in all fields.", type: "error" });
      return;
    }

    // EmailJS send
    emailjs
      .send(
        "service_acx22sf", // Your EmailJS Service ID
        "template_bd74e68", // Your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: "rahulpratik3636@gmail.com", // Set Reply-To to sender's email
        },
        "Z7QLWZh4c94328Se3" // Your EmailJS Public Key
      )
      .then(
        () => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          setFormData({ name: "", email: "", message: "" }); // Clear form
          setTimeout(closeModal, 2000); // Close modal after 2 seconds
        },
        (error) => {
          setStatus({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <>
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="sm:text-2xl font-bold">durgB.Dev</h1>
          <nav className="flex items-center space-x-4">
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
                className="text-gray-600 hover:text-gray-800 text-2xl cursor-pointer"
              >
                ×
              </button>
            </div>
            <div>
              {status.message && (
                <div
                  className={`mb-4 p-2 rounded text-center ${
                    status.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status.message}
                </div>
              )}
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
                  value={formData.name}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex justify-between items-center space-x-4">
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/rahul3636/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                    aria-label="LinkedIn Profile"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/_mr_.developer_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-800"
                    aria-label="Instagram Profile"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.78.227 1.702 2.305.072 5.577.014 8.857 0 9.266 0 12s.014 3.143.072 6.423c.155 3.272 2.233 5.35 5.505 5.505 1.28.058 1.689.072 4.923.072s3.643-.014 4.923-.072c3.272-.155 5.35-2.233 5.505-5.505.058-1.28.072-1.689.072-4.923s-.014-3.643-.072-4.923c-.155-3.272-2.233-5.35-5.505-5.505C15.643.014 15.234 0 12 0z" />
                      <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                      <circle cx="18.406" cy="5.594" r="1.44" />
                    </svg>
                  </a>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={sendEmail}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
