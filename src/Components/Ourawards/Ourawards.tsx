import { useRef } from 'react';
import './Ourawards.css';
import { useInView } from 'framer-motion';
// Define type for award data
interface Award {
  title: string;
  subtitle?: string;        
  description: string;
  achievements: string[];
  link: string;
  imageUrl: string;
  alt?: string;
}

export const OurAwards = ({ theme }: { theme: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Awards data – replace with your own
  const awardsData: Award[] = [
    {
      title: "2025 Tunisia Section Outstanding Student Chapter Award",
      description:
        "The award highlights Student Chapters that advance IEEE’s technical, professional, and educational objectives, promote engineering excellence, and strengthen student–industry–academia connections.",
      achievements: [
        "Organized 12+ technical workshops and seminars with 500+ attendees",
        "Led community outreach programs impacting 800+ students in local schools",
        "Strengthened industry–academia ties through 6 collaborative events and company visits"
      ],
      link: "https://ieee.tn/awards-recognition-committee/awards/outstanding-student-branch-chapter-award/",
      imageUrl: "https://i.postimg.cc/cH0rSpXP/tsyp-cert.png",
      alt: "2025 Outstanding Student Chapter Award Certificate"
    },
    // Uncomment below if you have a second award
    // {
    //   title: "2022 Outstanding Medium Student Branch Award",
    //   description: "Recognized for exceptional performance in organizing technical events, workshops, and community outreach programs, demonstrating strong leadership and innovation throughout the year.",
    //   achievements: [
    //     "International recognition for excellence",
    //     "Featured in IEEE publications",
    //     "Global impact on 1000+ students"
    //   ],
    //   link: "https://ieee.tn/awards-recognition-committee/awards/outstanding-student-branch-chapter-award/",
    //   imageUrl: "https://i.postimg.cc/cH0rSpXP/tsyp-cert.png",
    //   alt: "2022 Outstanding Medium Student Branch Award"
    // }
  ];

  return (
    <section id="awards" ref={ref}>
      <div className="container">
        <div className="awards-header">
          <h6 className="subtitle">Our Awards</h6>
          <h2>Recognized for Excellence</h2>
        </div>

        <div className="awards-list">
          {awardsData.map((award, idx) => (
            <AwardCard
              key={idx}
              award={award}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual award card with alternating layout
const AwardCard = ({
  award,
  index,
  isInView
}: {
  award: Award;
  index: number;
  isInView: boolean;
}) => {
  // Alternating layout: even index → image left, text right
  // odd index → image right, text left
  const isEven = index % 2 === 0;

  return (
    <div
      className={`award-card ${isEven ? 'image-left' : 'image-right'}`}
      style={{
        transform: isInView ? 'none' : 'translateY(50px)',
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + index * 0.1}s`
      }}
    >
      <div className="award-image">
        <img src={award.imageUrl} alt={award.alt || award.title} />
      </div>
      <div className="award-info">
        <div className="award-badge">🏆 {award.title}</div>
        <p className="award-description">{award.description}</p>

        <div className="achievements-section">
          <h3>Key Achievements</h3>
          <ul>
            {award.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="read-more-wrapper">
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="read-more-btn"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};