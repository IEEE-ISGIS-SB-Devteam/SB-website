import { useInView } from 'framer-motion';
import { FC, useRef } from 'react';
import Lottie from 'lottie-react'; // Import Lottie
import darkThemeHeroImg from '../../images/hero-img.png';
import lightThemeHeroImg from '../../images/light-hero-img.jpg';
import darkAnimationData from '../../../public/Animation.json'; // Adjust the path to your JSON file
import lightAnimationData from '../../../public/Animation2.json'; // Adjust the path to your JSON file
import './hero.css';

interface Props {
  theme: string;
}

export const Hero: FC<Props> = ({ theme }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="hero__section" id="home" ref={ref}>
      <div className="container">
        <div className="hero__wrapper">
          
          <div
            className="hero__content"
            style={{
              transform: isInView ? 'none' : 'translateX(-100%)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s ease-out 0.5s',
            }}
          >
            <div>
              <h2>Welcome To Our</h2>
              <h2>Big Family</h2>
              <h2 className="highlight">IEEE SMC ISIMS SB</h2>
            </div>
            <p className="description">
              Empowering innovation and driving digital success—IEEE SMC ISIMS SB is dedicated to advancing technology, collaboration, and professional growth. Join us in shaping the future through cutting-edge projects, research, and community engagement.
            </p>
            <div className="hero__btns">
              <button className="primary__btn"><a href='#about'>Get Started Now</a></button>
              <button className="secondary__btn"><a href='https://docs.google.com/forms/d/13bwrvBMg-ztF1HsUI7QhZ2WgfoFzIYGs3quXB-56L1s/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnMW3GOJUzypH4aUCFiich_6rVh2-fMlN7o76V7kc_z-BRkz0z4pvAAhs4RQM_aem_PJip4hJECX99z0w-H65xlA&edit_requested=true'><span>Join Us !</span></a></button>
            </div>
          </div>
          <div className="hero__img">
            {theme === '' ? (
              <Lottie
                animationData={darkAnimationData}
                loop={true}
                autoplay={true}
                style={{
                  transform: isInView ? 'none' : 'translateX(100%)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1s ease-out 0.5s',
                }}
              />
            ) : (
              <Lottie
                animationData={lightAnimationData}
                loop={true}
                autoplay={true}
                style={{
                  transform: isInView ? 'none' : 'translateX(100%)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 1s ease-out 0.5s',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};