import React from 'react';
import HeroImg from '../assets/hero-img.jpg';

import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { FaSalesforce } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32" id="home">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Greetings 👋 <br />
            <br />
            <span className="text-accent">Nik Rougal</span>
            <br />
            Software Developer
          </h1>

          <p className="py-5">Salesforce and Web Development</p>

          <div className="flex py-5 ">
            <a
              href="https://github.com/nikitarougal"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <AiOutlineGithub size={40} />{' '}
            </a>
            <a
              href="https://trailblazer.me/id/nruhal"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaSalesforce size={40} />{' '}
            </a>
            <a
              href="https://www.linkedin.com/in/nikita-ruhal/"
              className="pr-4 inline-block text-accent hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <AiOutlineLinkedin size={40} />{' '}
            </a>
          </div>

          <a
            href="#portfolio"
            className=" btn bg-accent  border-2 border-[#408ec6] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img src={HeroImg} alt="work illustration" className="w-[80%] m-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
