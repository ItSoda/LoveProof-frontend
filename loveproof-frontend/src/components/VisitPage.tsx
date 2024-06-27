import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../index.css';
import { Link } from 'react-router-dom';

function VisitPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <body className="bg-gray-100 text-gray-800">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Love Proof</h1>
            <nav className="space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="bg-white py-20" data-aos="fade-up">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Relationship community & loyalty tests
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Join our community and take loyalty tests to strengthen your
              relationships.
            </p>
            <Link to="/login">
            <a
              className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
            >
              Get Started
            </a>
            </Link>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-12"
              data-aos="fade-right"
            >
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                data-aos="zoom-in"
              >
                <h3 className="text-2xl font-bold mb-4">Community</h3>
                <p className="text-gray-700">
                  Connect with like-minded individuals and share experiences.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                data-aos="zoom-in"
              >
                <h3 className="text-2xl font-bold mb-4">Loyalty Tests</h3>
                <p className="text-gray-700">
                  Take tests to measure and improve loyalty in your
                  relationships.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                data-aos="zoom-in"
              >
                <h3 className="text-2xl font-bold mb-4">Resources</h3>
                <p className="text-gray-700">
                  Access a variety of resources to help you build stronger
                  connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-12"
              data-aos="fade-left"
            >
              About Us
            </h2>
            <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
              <p className="text-gray-700 mb-4">
                Love Proof is dedicated to helping individuals build and maintain
                strong relationships through community support and loyalty
                tests.
              </p>
              <p className="text-gray-700">
                Our mission is to provide a platform where people can connect,
                share, and grow together.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-12"
              data-aos="fade-right"
            >
              Contact Us
            </h2>
            <div className="max-w-2xl mx-auto" data-aos="fade-up">
              <form className="bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label id="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label id="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label id="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Love Proof. All rights reserved.</p>
        </div>
      </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
      <script>AOS.init();</script>
    </body>
  );
}

export default VisitPage;
