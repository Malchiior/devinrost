import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! The contact form is not currently connected to an API.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6"
    >
      <div className="text-center text-sm text-red-600 mb-4">
        ⚠️ This site is a portfolio preview. The Contact Form, AI Chat, and Image Generator are not functional — API tokens were not paid for.
      </div>

      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-2">Devin Rost</h2>
        <p className="text-gray-700 text-lg">📞 941-920-1923</p>
        <p className="text-gray-700 text-lg">📧 Devinstonerost@live.com</p>
        <a
          href="/Devin_Rost_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          📄 Download My Resume
        </a>
      </div>

      <div className="w-full max-w-xl bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-center text-blue-500 mb-6">Send a Message</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
