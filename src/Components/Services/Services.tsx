import { useRef } from 'react';
import { Card } from './Card';
import './services.css';
import { useInView } from 'framer-motion';

const servicesData = [
{
    icon: "ri-cpu-line",
    title: "Intelligent Systems & AI",
    description: "Explore cutting-edge innovations in intelligent systems, artificial intelligence, and automation, driving the future of smart technologies.",
},
{
    icon: "ri-cloud-line",
    title: "Cyber-Physical Systems",
    description: "Delve into the integration of physical and digital systems, enhancing automation, control, and real-time data processing for various industries.",
},
{
    icon: "ri-global-line",
    title: "Systems Engineering",
    description: "Develop and optimize complex systems with a structured approach, ensuring efficiency, scalability, and innovation in technology-driven projects.",
},
{
    icon: "ri-lightbulb-line",
    title: "Technology & Innovation",
    description: "Stay ahead with emerging technologies, fostering innovation and research in smart computing, robotics, and intelligent decision-making systems.",
}

]

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="services__top-content">
        <h6 className="subtitle">Our Services</h6>
<h2>Enhance your skills and advance your career with</h2>
          <h2 className="highlight">Our Best Services</h2>
        </div>
        <div className="services__item-wrapper">
            {servicesData.map((i, idx) => (
                <Card key={`services__item-${idx}`} title={i.title} description={i.description} icon={i.icon} isInView={isInView} idx={idx} />
            ))}
        </div>
      </div>
    </section>
  );
};
