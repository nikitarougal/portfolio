import React from 'react';
import AboutImg from '../assets/about-img.jpg';

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 pb-2">About Me</h2>

          <p className="pb-5">
            I have experience in both Salesforce and web development, having worked with
            various technologies and platforms to deliver effective solutions.
          </p>
          <p className="pb-5">
            As a Salesforce Developer, I possess a strong background in developing applications
            using Lightning Components (LWC and Aura), Visualforce, Apex, APIs, Web Services,
            and Triggers. I am adept at handling security policies, SSO configuration, sharing
            rules, permissions, and roles. Additionally, I have extensive experience utilizing
            Process Builder, Flows, and SQL/SOQL/SOSL. I have also successfully created custom
            integrations to enhance system capabilities.
          </p>

          <p className="pb-5">
            Furthermore, I have a solid foundation in web development, where I have focused on
            improving website functionality, optimizing speed, and enhancing overall
            performance as a Web Developer.
          </p>

          <p className="pb-5">
            I am highly enthusiastic about pushing the boundaries of technology and
            contributing to impactful projects.
          </p>
        </div>

        <div className="about-img">
          <img src={AboutImg} alt="coding illustration" className="w-[80%] m-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
