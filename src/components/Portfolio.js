import React from 'react';
import currency from '../assets/currency.png';

const Portfolio = () => {
  const projects = [
    {
      img: currency,
      title: 'currency',
      desc: ' Salesforce Lightning Web Component (LWC) application ',
      live: 'https://nikitarougal.github.io/Lightning-Out-Currency-App/',
      code: 'https://github.com/nikitarougal/lwc-currency-rates',
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="portfolio">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 pb-2">Portfolio</h2>

          <p className="pb-5">
            The Currency App is a Salesforce Lightning Web Component (LWC) application that
            allows users to retrieve currency rates, display them in a table, and convert
            currency amounts using current exchange rates.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">{project.desc}</p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
