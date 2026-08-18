import { FC, useEffect, useRef, useState } from 'react';
import './header.css';
import logo from '../../../public/logo.png'; // Import your logo

interface Props {
  theme: string;
  changeTheme: () => void;
}

export const Header: FC<Props> = ({ theme, changeTheme }) => {
  const nav__links = [
    { path: '#home', display: 'Home' },
    { path: '#about', display: 'About Us' },
    { path: '#team', display: 'Team' },
    { path: '#achievements', display: 'Achievements' },
    { path: '#awards', display: 'Our awards' },        // changed from #Ourawards to #awards
    { path: '#contact', display: 'Contact Us' },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0); // default first link active

  const darkMode = (
    <>
      <i className="ri-sun-line" />
      <span>Light Mode</span>
    </>
  );

  const lightMode = (
    <>
      <i className="ri-moon-line" />
      <span>Dark Mode</span>
    </>
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeStickiness = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current?.classList.add('header__shrink');
    } else {
      headerRef.current?.classList.remove('header__shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeStickiness);
    return () => window.removeEventListener('scroll', changeStickiness);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLElement>, idx: number) => {
    e.preventDefault();
    setActiveIndex(idx);

    const target = e.target as HTMLAnchorElement;
    const targetAttribute = target.getAttribute('href');

    if (targetAttribute) {
      const element = document.querySelector(targetAttribute) as HTMLElement;
      if (element) {
        const location = element.offsetTop;
        window.scrollTo({
          left: 0,
          top: location - 80,
        });
      }
    }
  };

  const toggleMobileMenu = () => menuRef.current?.classList.toggle('menu__active');

  return (
    <>
      {/* ======== TOP IEEE BAR ========= */}
      <div className="top-bar">
        <div className="top-bar-container">
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE.org</a>
          <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer">IEEE Xplore</a>
          <a href="https://ieee-collabratec.ieee.org/" target="_blank" rel="noopener noreferrer">Collabratec</a>
          <a href="https://www.ieee.org/membership" target="_blank" rel="noopener noreferrer">Join IEEE</a>
        </div>
      </div>

      {/* ======== MAIN HEADER ========= */}
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="nav__wrapper">
            <div className="logo">
              <a href="#">
                <img src={logo} alt="FutureMedia Logo" />
              </a>
            </div>
            <div className="navigation" ref={menuRef} onClick={toggleMobileMenu}>
              <ul className="menu">
                {nav__links.map((link, idx) => (
                  <li key={idx} className="menu__item">
                    <a
                      href={link.path}
                      className={`menu__link ${activeIndex === idx ? 'active' : ''}`}
                      onClick={(e) => handleLinkClick(e, idx)}
                    >
                      {link.display}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="right-menu">
              <div className="light__mode">
                <button onClick={changeTheme}>
                  {theme === 'light-theme' ? lightMode : darkMode}
                </button>
              </div>
              <span className="mobile__menu" onClick={toggleMobileMenu}>
                <i className="ri-menu-line" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};