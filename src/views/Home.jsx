import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { TypeAnimation } from 'react-type-animation';
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>

    <br />
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Krishna Babu Laveti
              </motion.span>
              <span className="block text-blue-500 z-0 text-sm sm:text-base md:text-2xl lg:text-3xl">
  <TypeAnimation
    sequence={[
      "MERN Stack Developer",
      1000,
      "ServiceNow CSA & CAD",
      1000,
      "Data Structures and Algorithms Using Java",
      1000,
      "Machine Learning",
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</span>


            </h1>

            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black text-justify sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white text-justify sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              Enthusiastic and dedicated student with expertise in Machine
              Learning, MERN stack development, DSA, and ServiceNow (CSA & CAD
              certified). Skilled in building ML models, developing web apps,
              solving complex problems, and delivering platform solutions. A
              quick learner and collaborative team player.
            </p>

            <div className="flex md:justify-start">
  {contactLinks.map((el, index) => (
    <a
      key={index}
      href={el.link}
      className="mr-5 cursor-pointer mt-8 hover:scale-125"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img alt={el.name} src={el.url} style={el.style} />
    </a>
  ))}
</div>

            {/* Download Resume Button */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-1/2">
                <a
                  href="/Laveti_Krishna_babu_Resume.pdf"
                  download
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt="Hero Graphic"
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
