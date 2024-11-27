import "../assets/contact.css";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useState } from "react";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "3a8e3515-5f20-422c-9925-3bfdeb65f0fc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Error!",
          text: res.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative  md:py-20 py-10 md:pb-64 md:px-6  bg-gray-900 text-white"
    >
      <div className="container  mx-auto">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 mb-8 md:mb-14"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="bg-white/80 backdrop-blur-lg p-3 md:p-8 rounded-md shadow-sm md:shadow-xl w-full md:max-w-lg mx-auto space-y-3 md:space-y-6"
        >
          <h2 className="md:text-2xl text-lg font-semibold text-gray-800 mb-2 md:mb-4 pb-2 md:pb-4">
            Send Me a Message
          </h2>

          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full md:p-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  "
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full md:p-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  "
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              name="message"
              className="mt-1 block w-full md:p-3 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  "
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:opacity-90 transition duration-300 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacts;
