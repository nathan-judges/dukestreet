import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Button } from '../components/common/Button';

const About = () => {
  return (
    <div className="w-full">
      <section className="section w-full">
        <div className="w-full px-5">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[80px] font-bold leading-tight mb-4">
              About Us
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 