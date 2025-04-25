import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { Button } from '../components/common/Button';

const Services = () => {
  const services = [
    {
      title: `Podcast Production`,
      description: `Professional podcast production services to help you share your story with the world.`,
      features: [
        `Audio recording and editing`,
        `Show notes and transcripts`,
        `Distribution to major platforms`,
        `Custom intro/outro music`,
        `Guest coordination`
      ],
      price: `From $1,500`,
      icon: `🎙️`
    },
    {
      title: `Website Design & Development`,
      description: `Custom website design and development tailored to your business needs.`,
      features: [
        `Responsive design`,
        `SEO optimization`,
        `Content management system`,
        `E-commerce integration`,
        `Analytics setup`
      ],
      price: `From $3,000`,
      icon: `🌐`
    },
    {
      title: `Branding & Logo Design`,
      description: `Create a strong brand identity that stands out in your market.`,
      features: [
        `Logo design`,
        `Brand guidelines`,
        `Business cards`,
        `Social media assets`,
        `Brand strategy`
      ],
      price: `From $2,000`,
      icon: `🎨`
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-background to-background-alt">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-text-light"
            >
              We offer a range of digital services to help your business grow and succeed online.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="mb-6 text-5xl">{service.icon}</div>
                <h3 className="mb-2">{service.title}</h3>
                <p className="mb-6 text-text-light">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-text-light">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="mb-4 text-lg font-semibold">{service.price}</p>
                  <Button variant="outline" asChild>
                    <a href="/contact">Get Started</a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section bg-background-alt">
        <Container>
          <div className="text-center">
            <h2 className="text-balance">Our Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-light">
              We follow a proven process to ensure your project's success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                title: `Discovery`,
                description: `We learn about your business and goals.`,
                icon: `🔍`
              },
              {
                title: `Planning`,
                description: `We create a detailed project plan.`,
                icon: `📋`
              },
              {
                title: `Design`,
                description: `We design and develop your solution.`,
                icon: `🎨`
              },
              {
                title: `Launch`,
                description: `We launch and support your project.`,
                icon: `🚀`
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4 text-4xl">{step.icon}</div>
                <h3 className="mb-2">{step.title}</h3>
                <p className="text-text-light">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="section">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance">Ready to Get Started?</h2>
            <p className="mt-4 text-text-light">
              Let's discuss your project and how we can help you achieve your goals.
            </p>
            <div className="mt-8">
              <Button asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Services; 