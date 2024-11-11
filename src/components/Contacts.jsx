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
        event.target.reset(); // Reset the form
      } else {
        Swal.fire({
          title: "Error!",
          text: res.message || "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error); // Log the error
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
      className="contact bg-gradient-to-r from-coral-500 to-coral-700 py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl font-bold text-white mb-10"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          onSubmit={onSubmit}
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
        >
          <h2 className="text-2xl  font-semibold text-gray-800">
            Send me a message
          </h2>

          {/* Name Input */}
          <div className="input-box">
            <label htmlFor="name" className="text-gray-700 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="input-box">
            <label
              htmlFor="email"
              className="text-gray-700 text-sm font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="field w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="Enter your Email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="input-box">
            <label
              htmlFor="message"
              className="text-gray-700 text-sm font-medium"
            >
              Your Message
            </label>
            <textarea
              name="message"
              className="field mess w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coral-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out disabled:bg-gray-300"
            type="submit"
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
