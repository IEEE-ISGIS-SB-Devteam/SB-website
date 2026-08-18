import { FC, useRef, useState } from 'react';
import member1 from '../../../public/ismail.png';
import member2 from '../../../public/shayma.png';
import member3 from '../../../public/imen.png';
import member4 from '../../../public/safwen.png';
import member5 from '../../../public/youssef.png';
import member6 from '../../../public/amina.png';
import member7 from '../../../public/ahlem.png';
import member8_2024 from '../../../public/bureau2024/aziz.png'; 
import member9_2025 from '../../../public/bureau2024/emna.png';
import member10_2025 from '../../../public/bureau2024/Alaa.png';
import member11_2025 from '../../../public/bureau2024/yessmine.png';
import member12_2025 from '../../../public/bureau2024/yassine.png';
import member17 from '../../../public/yassine.png';
import member13 from '../../../public/ayda.png';
import member14 from '../../../public/asma.png';
import member16 from '../../../public/mohamedR.png';
import member15 from '../../../public/mohamedA.png';
import member18 from '../../../public/ahlem1.png';


import { Member } from './Member';
import './team.css';
import { useInView } from 'framer-motion';

const teamData = [
  {
    image: member13,
    name: 'AYDA ABDELHEDI',
    position: 'CHAIR',
    linkedin: 'https://www.linkedin.com/in/ayda-abdelhedi-11004a392/',
    facebook: 'https://www.facebook.com/ayda.abdelhedi.9?locale=fr_FR',
  },
  {
    image: member14,
    name: 'ASMA LAHMAR',
    position: 'VICE CHAIR',
    linkedin: 'https://www.linkedin.com/in/asma-lahmar-3b4763321?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    facebook: 'https://www.facebook.com/Asma.Lahmar22?mibextid=wwXIfr&mibextid=wwXIfr',
  },
  {
    image: member15,
    name: 'MOHAMED AYDI',
    position: 'SECRETARY',
    linkedin: 'https://www.linkedin.com/in/aydi-mohamed-220586397/',
    facebook: 'https://www.facebook.com/mohamed.aydi.92102#',
  },
  {
    image: member16,
    name: 'MOHAMED REBAI',
    position: 'TRESURER',
    linkedin: 'https://www.linkedin.com/in/mohamed-rebai-?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    facebook: 'https://www.facebook.com/share/1CPjpFZK4J/',
  },
  {
    image: member17,
    name: 'YASSINE SOUISSI',
    position: 'WEB MASTER',
    linkedin: 'https://www.linkedin.com/in/yassine-souissi-34a8482a7/',
    facebook: 'https://www.facebook.com/yassine.souissi.19',
  },
  {
    image: member18,
    name: 'Mrs Ilhem Kallel',
    position: 'COUNSELOR',
    linkedin: 'https://www.linkedin.com/in/ilhem-kallel-78699b36/',
    facebook: 'https://www.facebook.com/ikallel',
  },
];

const team2024 = [
  {
    image: member8_2024,
    name: "MOHAMED AZIZ BEN AMAR",
    position: "CHAIR",
    linkedin: "https://www.linkedin.com/in/mohamed-aziz-ben-amar/",
    facebook: "https://www.linkedin.com/in/mohamed-aziz-ben-amar/",
  },
  {
    image: member9_2025,
    name: "EMNA ANNABI",
    position: "VICE CHAIR",
    linkedin: "https://www.linkedin.com/in/emna-annabi-367517296/",
    facebook: "https://www.linkedin.com/in/emna-annabi-367517296/",
  },
  {
    image: member10_2025,
    name: "ALAA BEN AMEUR",
    position: "SECRETARY",
    linkedin: "https://www.linkedin.com/in/alaa-ben-ameur/",
    facebook: "https://www.linkedin.com/in/alaa-ben-ameur/",
  },
  {
    image: member11_2025,
    name: "YESSMINE BOUCHHIWA",
    position: "TRESURER",
    linkedin: "#",
    facebook: "#",
  },
  {
    image: member12_2025,
    name: "YASSINE BEN AYED",
    position: "WEB MASTER",
    linkedin: "https://www.linkedin.com/in/yassinebenayed/",
    facebook: "https://www.linkedin.com/in/yassinebenayed/",
  },
  
];

const team2025 = [
  {
    image: member1,
    name: 'ISMAIL REBAI',
    position: 'CHAIR',
    linkedin: 'https://www.linkedin.com/in/ismail-rebai1/',
    facebook: 'https://www.facebook.com/ismail.rebai.714',
  },
  {
    image: member2,
    name: 'SHAYMA BEN HECHMI',
    position: 'VICE CHAIR',
    linkedin: 'https://www.linkedin.com/in/shayma-ben-hechmi-190752240/',
    facebook: 'https://www.facebook.com/chayma.benhechmi.1',
  },
  {
    image: member3,
    name: 'IMEN BEN RAMDHANE',
    position: 'SECRETARY',
    linkedin: 'https://www.linkedin.com/in/imen-ben-ramdhan-9ba98b347/',
    facebook: 'https://www.facebook.com/imen.benramdhan',
  },
  {
    image: member4,
    name: 'SAFWEN MARDESSI ',
    position: 'TRESURER',
    linkedin: 'https://www.linkedin.com/in/safouen-mardessi-1079b334a/',
    facebook: 'https://www.facebook.com/safouen.mardessi',
  },
  {
    image: member5,
    name: 'YOUSSEF DHOUIB',
    position: 'WEB MASTER',
    linkedin: 'https://www.linkedin.com/in/youssef-dhouib-yd2003/',
    facebook: 'https://www.facebook.com/youssef.dhouib.5',
  },
  {
    image: member6,
    name: 'AMINA MAALOUL',
    position: 'MEDIA MANAGER',
    linkedin: 'https://www.linkedin.com/in/amina-maaloul-797938334/',
    facebook: 'https://www.facebook.com/amina.maaloul.10',
  }, 
  {
    image: member7,
    name: 'Mrs Ilhem Kallel',
    position: 'COUNSELOR',
    linkedin: 'https://www.linkedin.com/in/ilhem-kallel-78699b36/',
    facebook: 'https://www.facebook.com/ikallel',
  },
  
];

interface Props {
  theme: string;
}

export const Team : FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [selectedYear, setSelectedYear] = useState("2026");

  return (
    <section id="team" className="our__team" ref={ref}>
      <div className="container">

        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
           <h2>
            Meet <span className="highlight">our team</span>
          </h2>

          <div className="team-year-toggle">
            <button 
              className={selectedYear === "2024" ? "team-btn active" : "team-btn"}
              onClick={() => setSelectedYear("2024")}
            >
              2024
            </button>
            <button 
              className={selectedYear === "2025" ? "team-btn active" : "team-btn"}
              onClick={() => setSelectedYear("2025")}
            >
              2025
            </button>
            <button 
              className={selectedYear === "2026" ? "team-btn active" : "team-btn"}
              onClick={() => setSelectedYear("2026")}
            >
              2026
            </button>
            
          </div>
        </div>

        <div className="team__wrapper">
          {(selectedYear === "2026" ? teamData : (selectedYear === "2025" ? team2025 : team2024)).map((i, idx) => (
            <Member
              image={i.image}
              name={i.name}
              position={i.position}
              key={`team-${selectedYear}-${idx}`}
              idx={idx}
              isInView={isInView}
              theme={theme}
              linkedin={i.linkedin}
              facebook={i.facebook}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
