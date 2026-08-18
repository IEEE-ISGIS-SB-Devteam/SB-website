import { useInView } from "framer-motion";
import { useRef } from "react";
import "./footer.css";
import logo from "../../../public/logo.png";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const year = new Date().getFullYear();

  const quickLinks = [
    {
      name: "Explore",
      content: [
        { path: "#home", display: "Home" },
        { path: "#about", display: "About Us" },
        { path: "#achievements", display: "Achievements" },
      ],
    },
    {
      name: "Connect",
      content: [
        { path: "#contact", display: "Contact Us" },
        { path: "#team", display: "Team" },
      ],
    },
  ];

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <div className="footer__wrapper">
          {/* Logo & Description */}
          <div className="footer__logo">
            <a href="#">
              <img src={logo} alt="FutureMedia Logo" className="footer__logo-img" />
            </a>
            <p className="footer__desc">
              Empowering your digital future with innovative solutions and creative media.
            </p>
            <div className="social__links">
              <a href="https://www.facebook.com/people/IEEE-SMC-ISIMS-SB-Chapter/61557150934003/"><i className="ri-facebook-line"></i></a>
              <a href="https://tn.linkedin.com/company/ieee-smc-chapter-isims-student-branch?trk=public_post_feed-actor-name"><i className="ri-linkedin-line"></i></a>
              <a href="https://www.instagram.com/ieee_smc_isims_sb_chapter/"><i className="ri-instagram-line"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__quick-links-wrapper">
            {quickLinks.map((section, idx) => (
              <div key={idx} className="footer__quick-links">
                <h3 className="quick__links-title">{section.name}</h3>
                <ul className="quick__links">
                  {section.content.map((link, index) => (
                    <li key={index} className="quick__link-item">
                      <a href={link.path}>{link.display}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p className="copyright">© {year} IEEE SMC ISIMS SB . All rights reserved.</p>
     {/*      <div className="footer__links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
