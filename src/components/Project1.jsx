import React from "react";
import { motion } from "framer-motion";
import wanderlust from "../assets/wanderlust.jpg";
import miniproject from "../assets/miniproject.png";
import movie_recommendation from "../assets/movie_recommendation.png";
import facemask from "../assets/facemask.png";
import powerBI from "../assets/powerBI.png";
import servicenow from "../assets/servicenow.png";

const Card = () => {
  const projects = [
    {
      title: "Face Mask Detection",
      description:
        "Face Mask Detection using CNN and OpenCV",
      image: facemask,
      link: "https://github.com/KrishnaBabuLaveti/fask-mask-detection-using-cnn",
    },
    {
      title: "Movie Recommendation System",
      description:
        "A machine learning-based movie recommender built for personalized content suggestions.",
      image: movie_recommendation,
      link: "https://github.com/KrishnaBabuLaveti/Movie-Recommendation",
    },
    {
      title: "Wanderlust - Rental Listing Platform",
      description:
        "Create listings, post reviews, and manage content with Cloudinary and MongoDB integration.",
      image: wanderlust,
      link: "https://github.com/KrishnaBabuLaveti/Wanderlust",
    },
    {
      title: "Student Project Management System",
      description:
        "Role-based management system for batch creation, CGPA sorting, file uploads, and reviews.",
      image: miniproject,
      link: "https://github.com/KrishnaBabuLaveti/Student-Project-Management",
    },
    
    {
      title: "Educational Organisation Using ServiceNow",
      description:
        "A streamlined Educational Management System that automates admissions and efficiently manages student, teacher, and academic data.",
      image: servicenow,
      link: "https://github.com/KrishnaBabuLaveti/Educational-Organisation-Using-ServiceNow",
    },
    
    {
      title: "Election Data Dashboard – Andhra Pradesh Parliamentary Analysis",
      description:
        "An interactive Power BI dashboard analyzing Andhra Pradesh parliamentary election results by constituency, party, gender, and candidate assets.",
      image: powerBI,
      // link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 40 },
          }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href={project.link} target="_blank" rel="noreferrer">
            <img
              className="rounded-t-lg w-full h-48 object-cover object-top"
              src={project.image}
              alt={`${project.title} Screenshot`}
            />
          </a>
          <div className="p-4">
            <a href={project.link} target="_blank" rel="noreferrer">
              <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                {project.title}
              </h5>
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11.414 11H3a1 1 0 010-2h8.414L10.293 4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
