// src/components/Achievements/Achievements.tsx
import { FC, useRef, useState, useEffect } from 'react';
import nextgencare from '../../images/events/onlinesession1.jpg';
import firstworkshop1 from '../../images/events/event2/475456859_17894335971172641_6254194458810006950_n.jpg';
import firstworkshop2 from '../../images/events/event2/476166160_17894336118172641_8225210886578653809_n.jpg';
import firstworkshop3 from '../../images/events/event2/476173168_17894336013172641_3281339727959510989_n.jpg'
import firstworkshop4 from '../../images/events/event2/476173168_17894336106172641_2648478637085977952_n.jpg';
import firstworkshop5 from '../../images/events/event2/479508162_17894335980172641_5488302205045712781_n.jpg';
import secondworkshop1 from '../../images/events/event3/481920411_17896296864172641_4109907338668099749_n.jpg';
import secondworkshop2 from '../../images/events/event3/481921579_17896296936172641_1935186454717583747_n.jpg';
import secondworkshop3 from '../../images/events/event3/482057477_17896297017172641_3318248889449507191_n.jpg';
import secondworkshop4 from '../../images/events/event3/482117576_17896296861172641_3862488602445203675_n.jpg';
import secondworkshop5 from '../../images/events/event3/482129454_17896297026172641_3170449326768276261_n.jpg';
import secondworkshop6 from '../../images/events/event3/7_n.jpg';

import thirdworkshop1 from '../../images/events/event4/feres1.png';
import thirdworkshop2 from '../../images/events/event4/feres2.png';
import thirdworkshop3 from '../../images/events/event4/feres3.png';
import tsesion3Workshop1 from '../../images/events/event4/1.png';
import tsesion3Workshop2 from '../../images/events/event4/2.png';
import tsesion3Workshop3 from '../../images/events/event4/3.png';
import tsesion3Workshop4 from '../../images/events/event4/4.png';
import tsesion3Workshop5 from '../../images/events/event4/5.png';
import tsesion3Workshop6 from '../../images/events/event4/6.png';
import tsesion3Workshop7 from '../../images/events/event4/7.png';
import tsesion3Workshop8 from '../../images/events/event4/8.png';
import tsesion3Workshop9 from '../../images/events/event4/9.png';
import tsesion3Workshop10 from '../../images/events/event4/10.png';
import tsesion3Workshop11 from '../../images/events/event4/11.png';

import chaima1 from '../../images/events/event7/chaima1.png';
import chaima2 from '../../images/events/event7/chaima2.png';
import hsanmzid from '../../images/events/event6/hsanmzid.png';
import hsan from '../../images/events/event6/hsan.jpg';

import onlinetalk from '../../images/events/event5/anat.png';

import applunch from '../../images/events/appposter.jpg';
import mlworkshop11 from '../../images/events/event/473109095_122189000402238364_8644461598496309750_n.jpg';
import mlworkshop12 from '../../images/events/event/473191020_122189000420238364_7845376377998464044_n.jpg';
import mlworkshop13 from '../../images/events/event/473433556_122189000618238364_1325842952642019137_n.jpg';
import mlworkshop14 from '../../images/events/event/473537708_122189000480238364_8709781669455637805_n.jpg';
import mlworkshop15 from '../../images/events/event//473582703_122189000486238364_2671796897540900005_n.jpg';
import mlworkshop2 from '../../images/events/onlinesessionahmedchtourou.jpg';
import mlworkshop3 from '../../images/events/onlisesessionahmedchtouroulast.jpg';
import thumbnailtrc from '../../images/events/trc2.0/thumbnail.jpg';
import organ from '../../images/events/trc2.0//organisation.jpg';
import pannel0 from '../../images/events/trc2.0/pannel0.jpg';
import pannel1 from '../../images/events/trc2.0/pannel1.jpg';
import pannel2 from '../../images/events/trc2.0/pannel2.jpg';
import pannel3 from '../../images/events/trc2.0/pannel3.jpg';
import night0 from '../../images/events/trc2.0//night0.jpg';
import night1 from '../../images/events/trc2.0/night1.jpg';
import night2 from '../../images/events/trc2.0/night2.jpg';
import night3 from '../../images/events/trc2.0/night3.jpg';
import workshop1 from '../../images/events/trc2.0/workshop1.jpg';
import workshop2 from '../../images/events/trc2.0/workshop2.jpg';
import workshop3 from '../../images/events/trc2.0/workshop3.jpg';
import workshop4 from '../../images/events/trc2.0/workshop4.jpg';
import pitch1 from '../../images/events/trc2.0/pitch1.jpg';
import pitch2 from '../../images/events/trc2.0/pitch2.jpg';
import winners from '../../images/events/trc2.0/winners.jpg';
import session1lat from '../../images/events/SESSION1LATSESSION(ONLINE).jpg';

import trc3 from '../../images/events/trc3.0/trc.jpg';
import nlpSession1 from '../../images/events/event bootcamp/sesion1.png';

import './achievements.css';
import { useInView } from 'framer-motion';

export interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  images: string[];
}

export const achievementsData: Achievement[] = [
  {
    id: 17,
    title: 'Introduction to NLP and Text Preprocessing – Session 1',
    description: `🚀 Session 1 is here!

Kickstart your journey into the world of Artificial Intelligence by exploring the fundamentals of Natural Language Processing (NLP) and Text Preprocessing — the essential first step toward building intelligent, language-aware systems.

In this session led by Mr. Kesentini Bassem — AI Engineer specializing in NLP & LLMs, Full-Stack Developer, and MSc Researcher — you'll uncover how machines read, interpret, and make sense of human language. From raw, messy text to clean, structured data ready for AI models, every transformation has a purpose.

🔍 What you'll explore:
• What is NLP and why it's central to modern AI
• How machines understand and process human language
• Core preprocessing techniques: tokenization, stemming, lemmatization, stop-word removal, and more
• How clean data directly impacts model accuracy and performance
• Real-world NLP applications: chatbots, search engines, sentiment analysis, and beyond

📅 June 29, 2026 · ⏰ 6:30 PM · 💻 Online via Google Meet

Whether you're a complete beginner or looking to solidify your AI foundations, this session is your gateway into language AI. Build a strong foundation, one token at a time — the future of intelligent systems starts here! 🔥

#NLP #TextPreprocessing #ArtificialIntelligence #IEEE #SMC #ISIMS
#ieee_isims_sb 💙🤍  #ieee_smc_isims_sbc 🤍🤍💙`,
    date: '29 June 2026',
    images: [nlpSession1],
  },
  {
    id: 10,
    title: ' 𝐀𝐈 𝐔𝐧𝐥𝐨𝐜𝐤𝐞𝐝: 𝐅𝐫𝐨𝐦 𝐂𝐨𝐧𝐜𝐞𝐩𝐭𝐬 𝐭𝐨 𝐇𝐚𝐧𝐝𝐬-𝐎𝐧 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 ',
    description: `🚀 Our “AI Unlocked” session was an inspiring deep dive into the world of Machine Learning!
  
Guided by the brilliant Mrs. Hanen Ameur, participants explored how machines learn, think, and make decisions through practical demonstrations and real-world use cases.  
The session blended theory and hands-on practice, allowing attendees to transform abstract AI concepts into intuitive, applied knowledge.
  
  🔍 During this session, we explored:
  • How machines learn from data  
  • Core ML concepts and workflows  
  • Real-world applications of ML  
  • Live demonstrations & guided practice  
  
This online event was a valuable opportunity for students to strengthen their understanding of intelligent systems and experience ML in action.  
A big thank you to everyone who joined and contributed to the discussion! 🤖✨
  
  #ieee_isims_sb 💙🤍  
  #ieee_smc_isims_sbc 🤍🤍💙`,
    date: '31 October 2025',
    images: [
      session1lat,
    ],
  },

  {
    id: 9,
    title: '𝐍𝐞𝐱𝐭-𝐆𝐞𝐧 𝐂𝐚𝐫𝐞 - 𝐎𝐧𝐥𝐢𝐧𝐞 𝐒𝐞𝐬𝐬𝐢𝐨𝐧',
    description: `🌍 Celebrate World Health Day with Us! 🤖🏥
In our online session we explored how Artificial Intelligence is transforming healthcare — from cutting-edge diagnostics to ethical innovations shaping the future of medicine. 
    
  🔍 In this session with our instructor Emna Bouassida, we did dive into:
    • The evolving impact of AI on healthcare  
    • Real-world breakthroughs and use cases  
    • Challenges and ethical considerations in AI-driven care  
    Let’s celebrate health, tech, and progress — together!  
    
    #ieee_isims_sb 💙🤍 
    #ieee_smc_isims_sbc 🤍🤍💙 
    #ieeeeducationweek 🤍💙`,
    date: '7 April 2025',
    images: [
      nextgencare,
    ],
  }
  ,{
    id: 8,
    title: '𝐓𝐞𝐜𝐡𝐑𝐞𝐬𝐨𝐥𝐯𝐞 𝐂𝐡𝐚𝐥𝐥𝐞𝐧𝐠𝐞 𝟐.𝟎',
    description: `💡 TRC 2.0 came back stronger than ever, delivering an electrifying hackathon experience where innovation, collaboration, and creativity took center stage!

This memorable edition was a collaborative initiative by IEEE IAS, SMC, CS, and WIE ISIMS SBC at the Higher Institute of Computer Science and Multimedia of Sfax — with participants joining from student branches all over Tunisia .
From thought-provoking panels and enriching workshops to the vibrant energy of the Bedoui Lounge, TRC 2.0 offered more than just coding — it was a celebration of talent, community, and inspiration.

🎤 The Bedoui Lounge turned into the heart of TRC: laughter, karaoke, unexpected talents, and shared moments that made us forget the hustle — a true space to chill, recharge, and shine!

🧠 Alongside the fun, participants engaged in hands-on workshops, insightful panel discussions, and inspiring talks led by invited experts. From tech trends to career development, TRC 2.0 was a space for learning, sharing, and elevating ideas.

🚀 Our challengers brought passion and drive into every line of code and every pitch. With bold ideas and confident storytelling, they turned visions into impactful realities.

🏆 Huge congratulations to all the winners — your innovation lit the way and made TRC 2.0 an unforgettable journey.  

This was more than a hackathon.  
It was a movement.  
It was TRC 2.0. 🔥  

#TRC2_0 🌙✨  
#TechResolveChallenge 🦾 
#ieee_isims_sb 💙🤍  
#ieee_cs_isims_sbc 🧡 
#ieee_wie_isims_sag  🩷
#ieee_ias_isims_sbc 💚 
#ieee_smc_isims_sbc 💙 
#GreatStoriesBeginHere ⚡`,
    date: '24–25 Mars 2025',
    images: [
      thumbnailtrc
      , organ, pannel0, pannel1, pannel2, night0, night1, night2, night3,
      workshop1, workshop2, workshop3, workshop4, pitch1, pitch2, winners

    ],
  }
  ,
  {
    id: 11,
    title: ' Secure Coding – Session 1 : Cybersecurity ',
    description: `🚀 IEEE SMC ISIMS Student Branch Chapter was pleased to announce 
    the launch of its Secure Coding Bootcamp, starting with Session 1 
    focused on Cybersecurity.

We were honored to welcome Mr. Feres Kessentini,
Cyber Security Specialist at MULTICOM
Cyber Security Instructor at GoMyCode

🗓️10 February
🕗08:00 PM
🎥Google Meet

This session provided participants with valuable insights into 
secure coding principles and real-world cybersecurity practices, 
helping them strengthen their technical expertise in today’s evolving 
digital landscape.

  #IEEE 
  #SMC 
  #ISIMS 
  #CyberSecurity 
  #SecureCoding 
  #Bootcamp 
  #ProfessionalDevelopment 
  #EngineeringStudents
  #ieee_isims_sb 💙🤍  
  #ieee_smc_isims_sbc 🤍🤍💙`,
    date: '10 February 2026',
    images: [
      thirdworkshop1,
    ],
  },

{
  id: 12,
  title: ' Secure Coding Bootcamp – Session 2 : Cybersecurity',
  description: `🚀 IEEE SMC ISIMS Student Branch Chapter continued its Secure Coding 
  Bootcamp with a second session dedicated to Cybersecurity.

  Following the success of the previous session, this meeting further addressed critical security 
  challenges in software development and highlighted best practices for writing secure, 
  reliable code.

  Speaker: Mr. Feres Kessentini
  Cyber Security Specialist at MULTICOM
  Cyber Security Instructor at GoMyCode

  🗓️February 11th
  🕗08:00 PM
  🎥Online via Google Meet

  Participants gained deeper insight into practical cybersecurity strategies 
  and the importance of integrating security into every stage of 
  the development lifecycle.🤖✨

  #IEEE 
  #SMC 
  #ISIMS 
  #Cybersecurity 
  #SecureDevelopment 
  #StudentBranch 
  #ProfessionalLearning 
    
  #ieee_isims_sb 💙🤍  
  #ieee_smc_isims_sbc 🤍🤍💙`,
    date: '11 February 2026',
    images: [
      thirdworkshop2,
    ],
  },

  {
  id: 13,
  title: ' Secure Coding Workshop – Session 3 : Cybersecurity',
  description: `🚀 IEEE SMC ISIMS Student Branch Chapter continued its Secure Coding 
  Bootcamp with a third session dedicated to Cybersecurity.

  This workshop, led by cybersecurity expert Mr. Feres Kessentini, 
  provided participants with a comprehensive introduction to secure 
  coding practices and their critical role in modern software 
  development.🤖✨

  🗓️February 14th
  🕑02:00 PM
  🌍ISIMS,Sc2

  #IEEE 
  #SMC 
  #ISIMS 
  #Cybersecurity 
  #SecureDevelopment 
  #StudentBranch 
  #ProfessionalLearning 
    
  #ieee_isims_sb 💙🤍  
  #ieee_smc_isims_sbc 🤍🤍💙`,
    date: '14 February 2026',
    images: [
      thirdworkshop3,
      tsesion3Workshop1,
      tsesion3Workshop2,
      tsesion3Workshop3,
      tsesion3Workshop4,
      tsesion3Workshop5,
      tsesion3Workshop6,
      tsesion3Workshop7,
      tsesion3Workshop8,
      tsesion3Workshop9,
      tsesion3Workshop10,
      tsesion3Workshop11,
    ],
  },
  
{
    id: 14,
    title: 'Online Talk : Ethical AI',
    description: ` 🚀We were honored to host our Online Talk on Ethical AI with our distinguished speaker,
    Ms. Anat Deracine.

    The session offered valuable insights into how ethics continues to shape the future of 
    artificial intelligence, highlighted real-world challenges in responsible technology, 
    and sparked meaningful discussions among participants.

    A big thank you to everyone who joined us and contributed to the 
    engaging exchange of ideas. We looked forward to bringing 
    you more impactful talks ahead.🌟

    🗓️February 22th
    🕘09:00 PM
    🎥Google Meet

    #IEEE_ISIMS_SB 💙🤍  
    #IEEE_SMC_ISIMS_SBC 💙  
    #IEEE_ISIMS_CS_SBC 🧡`,
    date: '22 February 2026',
    images: [
      onlinetalk,
      
    ],
  },
  {
    id: 16,
    title: ' TRC 3.0: A Milestone in Innovation and Collaboration ',
    description: `💡 TRC 3.0 marked a new milestone of innovation and collaboration, bringing together creative minds for an impactful
     hackathon experience at the Higher Institute of Computer Science and Multimedia of Sfax.
    Organized by IEEE IAS, WIE, SMC, CS, SIGHT, IES, PES, and RAS under IEEE ISIMS Student Branch, 
    this edition welcomed participants from student branches across Tunisia. Through hands-on workshops, 
    expert-led panels, and intense challenge sessions, TRC 3.0 became a space where ideas evolved into meaningful solutions.
    🚀 Powered by passion, teamwork, and bold thinking, our challengers delivered inspiring projects that 
    reflected both technical excellence and real-world impact.
    More than an event_it was TRC 3.0. 🔥
    #TRC3_0 
    #IEEE_ISIMS_SB
    #TechResolveChallenge
    #GreatStoriesBeginHere`,
    date: '16-17 march 2026',
    images: [
      trc3,
    ],
  },
  {
  id: 15,
  title: ' Gen AI: LLM Prompting and Image & Video Generation and RAG & AI AGENT',
  description: `🚀 We successfully wrapped up the first two sessions of our GENOPS Bootcamp, diving deep into the world of Generative AI .
🔹 Session 1: LLM Prompting & Image/Video Generation
🔹 Session 2: RAG & AI Agents
These sessions were greatly led by Ms. Chaima Chtourou .
This is just the beginning of more exciting sessions and hands-on experiences are coming!

  🗓️April 8th
  🕗08:00 PM
  🎥Online via Google Meet

  
  #RAG 
  #LLM
  #IEEE 
  #GenOps 
  #AIAgents
  #AICommunity
  #GenerativeAI 
  #TechEducation `,



    date: '8 & 9 April 2026',
    images: [
      chaima1,
      chaima2,
    ],
  },

{
    id: 16,
    title: 'SESION 3: MLOps Fundamentals with MLFLOW',
    description: ` 🚀We successfully conducted our third session of the GENOPS Bootcamp,
     diving into the world of MLOps 💻
    Led by Mr. Hsan Mzid, this session helped students explore ML ops concepts and it was
     a first step into building a simple ML pipeline .
    The session was a great step forward in bridging the gap between building models and 
    delivering impactful AI solution .
    Excited to see our participants growing their skills and mindset with each session!
    🌟

    🗓️April 11th
    🕘13:30 PM
    🌍ISIMS,Sc2

    
    #AI
    #IEEE
    #MLOps
    #GenOps
    #MLflow
    #TechCommunity
    #DataEngineering
     #MachineLearning`,
    date: '11 April 2026',
    images: [
      hsanmzid,
      hsan,

      
    ],
  },

  {
    id: 2,
    title: '𝐓𝐡𝐞 𝐀𝐈 𝐅𝐨𝐮𝐧𝐝𝐫𝐲 𝐁𝐨𝐨𝐭𝐜𝐚𝐦𝐩 – 𝐒𝐞𝐜𝐨𝐧𝐝 𝐖𝐨𝐫𝐤𝐬𝐡𝐨𝐩',
    description: `The AI Foundry bootcamp continues to empower and inspire! 🎉  

In this session, participants explored advanced AI concepts and hands-on applications, guided by the amazing Emna Bouassida 🎤🌟.
We delved into the intricacies of AI, from neural networks to real-world applications, and even tackled some of the ethical challenges in this rapidly evolving field.
A huge shoutout to all the dedicated participants—your enthusiasm and curiosity make this journey truly special.  
This workshop was held in collaboration with Culture House Sakiet Ezzit Hay Ons as part of "الأيام الثقافية الرقمية". 
Stay tuned for more AI insights and hands-on learning! 🔥  
This workshop was held in collaboration with IEEE_ISIMS_CS_SBC.

#IEEE_ISIMS_SB 💙🤍  
#IEEE_SMC_ISIMS_SBC 💙  
#IEEE_ISIMS_CS_SBC 🧡`,
    date: '23 February 2025',
    images: [
      secondworkshop1,
      secondworkshop5,
      secondworkshop3,
      secondworkshop4,
      secondworkshop2,
      secondworkshop6
    ],
  },
  {
    id: 3,
    title: '𝐓𝐡𝐞 𝐀𝐈 𝐅𝐨𝐮𝐧𝐝𝐫𝐲 𝐁𝐨𝐨𝐭𝐜𝐚𝐦𝐩 – 𝐅𝐢𝐫𝐬𝐭 𝐖𝐨𝐫𝐤𝐬𝐡𝐨𝐩',
    description: `The AI Foundry bootcamp journey has officially begun! 🎉  

In our first workshop, Introduction to AI, participants explored the fundamentals of Artificial Intelligence, Machine Learning, and model training, led by Dr. Hanen Ameur 🎤🌟.
A huge thank you to everyone who joined—this and Stay tuned for more hands-on workshops and AI insights. 🔥
This workshop was held in collaboration with IEEE_ISIMS_CS_SBC.

#ieee_isims_sb 💙🤍 
#ieee_smc_isims_sbc 🤍🤍💙
#IEEE_ISIMS_CS_SBC 🧡 `,
    date: '9 February 2025',
    images: [
      firstworkshop5,
      firstworkshop1,
      firstworkshop3,
      firstworkshop4,
      firstworkshop2,

    ],
  },

  {
    id: 4,
    title: '𝐋𝐚𝐮𝐧𝐜𝐡𝐢𝐧𝐠 𝐭𝐡𝐞 𝐈𝐄𝐄𝐄 𝐈𝐒𝐈𝐌𝐒 𝐒𝐁 𝐌𝐨𝐛𝐢𝐥𝐞 𝐀𝐩𝐩',
    description:
      'Join our bootcamp and kickstart your journey into Machine Learning. Thanks to Ahmed Chtourou for his contributions 🫡',
    date: '26 November 2024',
    images: [
      applunch,
    ],
  },
  {
    id: 5,
    title: '𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐁𝐨𝐨𝐭𝐜𝐚𝐦𝐩 - 𝐔𝐧𝐬𝐮𝐩𝐞𝐫𝐯𝐢𝐬𝐞𝐝 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠',
    description: `🌟 Our third session was a blast!  

We dove deep into Unsupervised Learning—exploring clustering, dimensionality reduction, and anomaly detection with hands-on exercises.  
Huge thanks to all participants for your curiosity and collaboration! Your creative insights made this workshop truly memorable.  
Stay tuned for session four as we continue to elevate our AI journey together! 🚀

#ieee_isims_sb 💙🤍 
#ieee_smc_isims_sbc 🤍🤍💙`,

    date: '30 October 2024',
    images: [
      mlworkshop3
    ],
  },

  {
    id: 6,
    title: '𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐁𝐨𝐨𝐭𝐜𝐚𝐦𝐩 - 𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝 𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠',
    description: `🌟 We just wrapped up our second online session: a deep dive into Advanced Machine Learning!  

Participants mastered cutting-edge techniques—from neural networks to real-world model deployment—guided by our expert instructors.  
A huge thank you to everyone who joined us and brought such energy and curiosity! 🎓✨  
Stay tuned for the next chapter in our AI Bootcamp series as we continue to explore, learn, and innovate together! 🚀

#ieee_isims_sb 💙🤍 
#ieee_smc_isims_sbc 🤍🤍💙`,


    date: '3 October 2024',
    images: [
      mlworkshop2
    ],
  },
  {
    id: 7,
    title: '𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐁𝐨𝐨𝐭𝐜𝐚𝐦𝐩 - 𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝐀𝐈',
    description: `🌟 Our recent AI Bootcamp was a huge success!  

A heartfelt thank you to everyone who joined us, and a special shout-out to Ahmed Chtourou for his invaluable contributions.  
We explored the fundamentals of Artificial Intelligence and kicked off our journey into Machine Learning together — what an incredible start!  
Stay tuned for more hands-on Bootcamps and AI insights on the horizon! 🚀

#ieee_isims_sb 💙🤍 
#ieee_smc_isims_sbc 🤍🤍💙`,

    date: '29 September 2024',
    images: [
      mlworkshop12,
      mlworkshop11,
      mlworkshop13,
      mlworkshop14,
      mlworkshop15,

    ],
  },
];

interface Props {
  theme: string;
}

export const Achievements: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  // ← Track which achievement was clicked (or null if no modal open)
  const [selected, setSelected] = useState<Achievement | null>(null);

  // ← Track which image index we are on inside the selected.images array
  const [imageIndex, setImageIndex] = useState(0);

  // Whenever `selected` changes to a new achievement, reset to the first image
  useEffect(() => {
    if (selected) {
      setImageIndex(0);
    }
  }, [selected]);

  const visible = achievementsData.slice(currentIndex, currentIndex + 3);

  const next = () =>
    setCurrentIndex((i) =>
      i >= achievementsData.length - 3 ? 0 : i + 1
    );
  const prev = () =>
    setCurrentIndex((i) =>
      i === 0 ? achievementsData.length - 3 : i - 1
    );

  // Colors for light / dark mode
  const textColor = theme === '' ? '#ffffff' : '#000000';

  // Handlers for cycling through images in the modal
  const showPrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selected) return;
    setImageIndex((idx) =>
      idx === 0 ? selected.images.length - 1 : idx - 1
    );
  };
  const showNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selected) return;
    setImageIndex((idx) =>
      idx >= selected.images.length - 1 ? 0 : idx + 1
    );
  };

  return (
    <>
      <section
        id="achievements"
        className={`${theme === '' ? 'achievementsDark' : 'achievements'}`}
      >
        <div className="container">
          <div className="achievements__header">
            <h6 className="subtitle">Our Milestones</h6>
            <h2 className="achievements__title">
              <span style={{ color: textColor }}>Explore our</span>{' '}
              <span className="highlight">Achievements</span>
            </h2>
          </div>

          <div className="achievements__slider-container" ref={ref}>
            <div
              className="achievements__wrapper"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'none' : 'translateY(50px)',
                transition: 'all 1s ease-out',
              }}
            >
              {visible.map((a) => (
                <div key={a.id} className="achievement__card">
                  <div className="achievement__img">
                    <img src={a.images[0]} alt={a.title} />
                    <div className="achievement__date">{a.date}</div>
                  </div>
                  <div className="achievement__content">
                    <h3 style={{ color: textColor }}>{a.title}</h3>
                    <p className="achievement__description">{a.description}</p>
                    <button
                      className="read-more__btn"
                      onClick={() => setSelected(a)}
                    >
                      View Details <i className="ri-arrow-right-up-line" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom navigation bar */}
            <div className="achievements__nav">
              <button className="achievements__nav-btn" onClick={prev} aria-label="Previous">
                <i className="ri-arrow-left-s-line" />
              </button>
              <span className="achievements__nav-counter">
                {currentIndex + 1} – {Math.min(currentIndex + 3, achievementsData.length)}
                <span className="achievements__nav-total"> / {achievementsData.length}</span>
              </span>
              <button className="achievements__nav-btn" onClick={next} aria-label="Next">
                <i className="ri-arrow-right-s-line" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ← Modal window with multiple‐image carousel controls */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>{selected.title}</h3>
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              {/* ← Left arrow overlay on image */}
              <button
                className="modal-nav modal-nav-left"
                onClick={showPrevImage}
              >
                <i className="ri-arrow-left-s-line" />
              </button>

              {/* ← Display the current image from selected.images */}
              <img
                src={selected.images[imageIndex]}
                alt={`${selected.title} - Slide ${imageIndex + 1}`}
                className="modal-image"
              />

              {/* ← Right arrow overlay */}
              <button
                className="modal-nav modal-nav-right"
                onClick={showNextImage}
              >
                <i className="ri-arrow-right-s-line" />
              </button>

              <p className="modal-date">{selected.date}</p>
              <h4 className="modal-subtitle">Description</h4>
              <p className="modal-description">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
