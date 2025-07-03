import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import emailjs from "emailjs-com";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
  "service_5f57ywx",
  "template_ha00czr",
  e.target,
  "JoAxdvducdMLmk2Xk"
)


      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">Contact</h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">Connect with me</h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row pb-24">
          <div className="w-full md:pr-8">
            <form onSubmit={sendEmail}>
              <div className="my-6">
                <label htmlFor="name" className={darkMode ? "block mb-2 text-lg font-medium text-gray-900" : "block mb-2 text-lg font-medium text-white"}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className={darkMode ? "block mb-2 text-lg font-medium text-gray-900" : "block mb-2 text-lg font-medium text-white"}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className={darkMode ? "block mb-2 text-lg font-medium text-gray-900" : "block mb-2 text-lg font-medium text-white"}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 h-28 w-full text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <div className="flex justify-between">
                <div className="underline">
                  <a href="mailto:krishnababulaveti@gmail.com">Send me email directly</a>
                </div>
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 w-40 rounded-md hover:bg-indigo-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto:krishnababulaveti@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-700 block"
            >
              krishnababulaveti@gmail.com
            </a>

            <h1 className="text-3xl font-bold">Address</h1>
            <p
              className="mt-4 mb-12 md:text-right font-semibold text-blue-700 block uppercase"
            >
              Gadimudidam, Rajam
              <br />
              India
            </p>

            <h1 className="text-3xl font-bold">Social</h1>
            <ul className="flex">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer mt-4 hover:scale-125 flex flex-col justify-center items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt={el.name} src={el.url} style={el.style} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
