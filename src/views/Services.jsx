import React from 'react';

const Internship = () => {
  return (
    <div className='pb-20 bg-fixed bg-black' id='internship'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Section Heading */}
        <h2 className="text-5xl font-extrabold text-center text-white tracking-wide">
          Internship Experience
        </h2>

        <h4 className="mt-12 text-3xl md:text-4xl font-bold text-blue-500 text-center">
          Where I’ve Worked
        </h4>

        {/* Internship Card */}
        <div className="mt-12 w-full bg-white rounded-3xl shadow-2xl p-10 transition-transform hover:scale-[1.01]">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                alt="Power BI Logo"
                className="w-36 h-36"
              />
            </div>

            {/* Description */}
            <div className="flex-1 text-gray-800">
              <h4 className="text-2xl md:text-3xl font-bold mb-2">Power BI Intern</h4>
              <h5 className="text-lg md:text-xl font-medium text-gray-600 mb-5">
                VNutureIT, Guntur &nbsp; | &nbsp; June 2024 - July 2024
              </h5>
              <ul className="list-disc space-y-4 text-lg leading-relaxed pl-5">
                <li>
                  Worked on a data analytics project focused on the Andhra Pradesh Assembly Elections 2023.
                </li>
                <li>
                  Collaborated with a team to design a dynamic Power BI dashboard showcasing:
                  party-wise performance, constituency-wise voter turnout, and election trend analysis.
                </li>
                <li>
                  Built insightful charts using bar graphs, pie charts, maps, and interactive slicers to enhance storytelling.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;