import React from 'react';
import currency from '../assets/currency.png';
import recruiting from '../assets/recruiting.png';

const Portfolio = () => {
  const projects = [
    {
      img: currency,
      title: 'The Currency App',
      desc: ' The Currency App is a Salesforce Lightning Web Component (LWC) application that allows users to retrieve currency rates, display them in a table, and convert currency amounts using current exchange rates. ',
      live: 'https://nikitarougal.github.io/Lightning-Out-Currency-App/',
      code: 'https://github.com/nikitarougal/lwc-currency-rates',
    },
    {
      img: recruiting,
      title: 'The Salesforce Recruiting App',
      desc: ' The Salesforce Recruiting App is a custom application designed to streamline the recruitment process by managing job openings and candidate applications. ',
      live: 'https://saas-customization-5419-dev-ed.scratch.my.site.com/RecruitingApp',
      code: 'https://github.com/nikitarougal/Recruiting-App',
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="portfolio">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 pb-2">Portfolio</h2>
        </div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <div className="relative flex flex-col items-center" key={i}>
            <h3 className="text-xl font-bold mb-2 pb-2">{project.title}</h3>
            <img src={project.img} alt={`Project: ${project.title}`} />
            <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100">
              <p className="py-5 text-center font-bold px-2 text-white">{project.desc}</p>
              <div className="mx-auto">
                <a
                  href={project.live}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 mr-5 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
