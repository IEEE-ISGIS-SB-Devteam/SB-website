import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import './about.css';
import { Calendar, Users, Sparkles, Laptop, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { FC } from 'react';
import { achievementsData, Achievement } from '../Achievements/Achievements';

interface Props {
  theme: string;
}

const About: FC<Props> = ({ theme }) => {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true });

  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState<Achievement | null>(null);
  const [imgIdx, setImgIdx] = useState(0);
  const [activeCard, setActiveCard] = useState<'family' | 'fun' | null>(null);

  useEffect(() => {
    if (selected) setImgIdx(0);
  }, [selected]);

  useEffect(() => {
    document.body.style.overflow = (showModal || !!activeCard) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showModal, activeCard]);

  const closeModal = () => { setShowModal(false); setSelected(null); };
  const closeDetail = () => setSelected(null);
  const closeInfoModal = () => setActiveCard(null);

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selected) return;
    setImgIdx(i => (i === 0 ? selected.images.length - 1 : i - 1));
  };
  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selected) return;
    setImgIdx(i => (i >= selected.images.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <section id="about">
        <div className="container" ref={containerRef}>
          <div className={`about-content${isContainerInView ? ' in-view' : ''}`}>

            <div className="about-text">
              <h6 className="subtitle">About us</h6>
              <h1 className="about-title">IEEE SMC ISIMS SB ?</h1>

              <h2 className="smaller-title">What is IEEE?</h2>
              <p className={theme === '' ? 'about-desc-dark' : 'about-desc'}>
                IEEE is a professional association for the advancement of technology. It is a global organization that brings together engineers, scientists, and other professionals to develop standards and promote innovation in technology.
              </p>

              <h2 className="smaller-title">What is SMC ISIMS SB?</h2>
              <p className={theme === '' ? 'about-desc-dark' : 'about-desc'}>
                SMC ISIMS SB (Systems, Man, and Cybernetics Society - ISIMS Student Branch) is a community where students explore AI, automation, and intelligent systems. Through workshops, competitions, and industry collaborations, we provide hands-on learning and networking opportunities to bridge the gap between theory and real-world innovation.
              </p>

              {/* Use <a> directly — no button wrapper to avoid nesting */}
              <a href="#achievements" className="explore-button">
                Explore more
                <div className="button-glow" />
              </a>
            </div>

            <div className="image-grid">
              {/* Events card — clickable, opens achievements modal */}
              <div
                className="grid-item events about-events-trigger"
                onClick={() => setShowModal(true)}
                role="button"
                tabIndex={0}
                aria-label="Open events and achievements"
                onKeyDown={e => e.key === 'Enter' && setShowModal(true)}
              >
                <div className="image-wrapper">
                  <img src="https://i.postimg.cc/YCgtXXMm/IMG-9812.jpg" alt="Events" />
                  <div className="card-content">
                    <Calendar className="card-icon" size={36} />
                    <span>Events</span>
                    <p className="card-description">Click to explore all our achievements</p>
                  </div>
                  <div className="about-events-badge">
                    <span>{achievementsData.length}+</span> events
                  </div>
                </div>
              </div>

              <div
                className="grid-item family about-events-trigger"
                onClick={() => setActiveCard('family')}
                role="button"
                tabIndex={0}
                aria-label="Learn about our community"
                onKeyDown={e => e.key === 'Enter' && setActiveCard('family')}
              >
                <div className="image-wrapper">
                  <img src="https://i.postimg.cc/7hd4xRgY/efd0daa9-1ced-4a2f-86c8-47dbacae3d46.jpg" alt="Family" />
                  <div className="card-content">
                    <Users className="card-icon" size={36} />
                    <span>Family</span>
                    <p className="card-description">Be part of our growing community</p>
                  </div>
                </div>
              </div>

              <div
                className="grid-item fun about-events-trigger"
                onClick={() => setActiveCard('fun')}
                role="button"
                tabIndex={0}
                aria-label="See our fun activities"
                onKeyDown={e => e.key === 'Enter' && setActiveCard('fun')}
              >
                <div className="image-wrapper">
                  <img src="https://i.postimg.cc/mrjGckYG/5a762e11-4ec4-4f77-92a8-ab59adbe79bb.jpg" alt="Fun" />
                  <div className="card-content">
                    <Sparkles className="card-icon" size={36} />
                    <span>Fun</span>
                    <p className="card-description">Enjoy memorable moments together</p>
                  </div>
                </div>
              </div>

              <div className="grid-item workshops">
                <div className="image-wrapper">
                  <img src="https://i.postimg.cc/66gx4DvN/73e710fb-b381-4e9e-be82-86aad6bbf4eb.jpg" alt="Workshops" />
                  <div className="card-content">
                    <Laptop className="card-icon" size={36} />
                    <span>Workshops</span>
                    <p className="card-description">Learn and grow with hands-on experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EVENTS GRID MODAL ── */}
      {showModal && (
        <div className="ev-backdrop" onClick={closeModal}>
          <div className="ev-modal" onClick={e => e.stopPropagation()}>
            <div className="ev-modal__header">
              <div className="ev-modal__header-text">
                <h2>Our Events &amp; Achievements</h2>
                <p>{achievementsData.length} milestones and counting</p>
              </div>
              <button type="button" className="ev-modal__close" onClick={closeModal} aria-label="Close modal">
                <X size={20} />
              </button>
            </div>

            <div className="ev-modal__grid">
              {achievementsData.map(a => (
                <div
                  key={a.id}
                  className="ev-card"
                  onClick={() => setSelected(a)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${a.title}`}
                  onKeyDown={e => e.key === 'Enter' && setSelected(a)}
                >
                  <div className="ev-card__img">
                    <img src={a.images[0]} alt={a.title} loading="lazy" />
                    <span className="ev-card__date">{a.date}</span>
                    <div className="ev-card__hover-overlay">
                      <span>View Details →</span>
                    </div>
                  </div>
                  <div className="ev-card__body">
                    <h4>{a.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── DETAIL MODAL ── */}
      {selected && (
        <div className="ev-detail-backdrop" onClick={closeDetail}>
          <div className="ev-detail-modal" onClick={e => e.stopPropagation()}>
            <div className="ev-detail__header">
              <h3>{selected.title}</h3>
              <button type="button" className="ev-modal__close" onClick={closeDetail} aria-label="Close detail">
                <X size={18} />
              </button>
            </div>

            <div className="ev-detail__body">
              <div className="ev-detail__img-wrapper">
                {selected.images.length > 1 && (
                  <button
                    type="button"
                    className="ev-detail__nav ev-detail__nav--left"
                    onClick={prevImg}
                    aria-label="Previous image"
                    title="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                )}
                <img
                  src={selected.images[imgIdx]}
                  alt={`${selected.title} – slide ${imgIdx + 1}`}
                  className="ev-detail__img"
                />
                {selected.images.length > 1 && (
                  <button
                    type="button"
                    className="ev-detail__nav ev-detail__nav--right"
                    onClick={nextImg}
                    aria-label="Next image"
                    title="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                )}
                {selected.images.length > 1 && (
                  <div className="ev-detail__dots">
                    {selected.images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`ev-detail__dot${i === imgIdx ? ' active' : ''}`}
                        onClick={e => { e.stopPropagation(); setImgIdx(i); }}
                        aria-label={`Go to image ${i + 1}`}
                        title={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="ev-detail__date">{selected.date}</p>
              <h4 className="ev-detail__subtitle">Description</h4>
              <p className="ev-detail__desc">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
      {/* ── FAMILY / FUN INFO MODAL ── */}
      {activeCard && (
        <div className="info-backdrop" onClick={closeInfoModal}>
          <div className="info-modal" onClick={e => e.stopPropagation()}>
            <div className={`info-modal__header info-modal__header--${activeCard}`}>
              <div className="info-modal__title">
                {activeCard === 'family' ? <Users size={24} /> : <Sparkles size={24} />}
                <h2>{activeCard === 'family' ? 'Our IEEE Family' : 'Fun at IEEE SMC'}</h2>
              </div>
              <button type="button" className="ev-modal__close" onClick={closeInfoModal} aria-label="Close">
                <X size={20} />
              </button>
            </div>

            <div className="info-modal__body">
              {activeCard === 'family' && (
                <>
                  <p className="info-modal__intro">
                    IEEE SMC ISIMS SB is more than just a student organization — it&apos;s a family. We believe that the strongest innovations come from diverse, supportive communities where every member is valued and heard.
                  </p>
                  <div className="family-stats">
                    <div className="family-stat">
                      <div className="family-stat__number">50+</div>
                      <div className="family-stat__label">Active Members</div>
                    </div>
                    <div className="family-stat">
                      <div className="family-stat__number">5</div>
                      <div className="family-stat__label">Committees</div>
                    </div>
                    <div className="family-stat">
                      <div className="family-stat__number">3+</div>
                      <div className="family-stat__label">Years Together</div>
                    </div>
                  </div>
                  <h3 className="info-modal__section-title">Our Values</h3>
                  <div className="family-values">
                    <div className="family-value">
                      <div className="family-value__icon">🤝</div>
                      <h4>Collaboration</h4>
                      <p>We work together across disciplines, combining different skills and perspectives to build something greater than any one of us could alone.</p>
                    </div>
                    <div className="family-value">
                      <div className="family-value__icon">💡</div>
                      <h4>Innovation</h4>
                      <p>We encourage bold ideas and creative problem-solving, always pushing the boundaries of what&apos;s possible in technology.</p>
                    </div>
                    <div className="family-value">
                      <div className="family-value__icon">🌱</div>
                      <h4>Growth</h4>
                      <p>Every member grows — technically, professionally, and personally. We mentor, we learn, and we lift each other up.</p>
                    </div>
                    <div className="family-value">
                      <div className="family-value__icon">🌍</div>
                      <h4>Diversity</h4>
                      <p>Our strength comes from our differences. We celebrate diverse backgrounds, ideas, and approaches to problem-solving.</p>
                    </div>
                  </div>
                </>
              )}

              {activeCard === 'fun' && (
                <>
                  <p className="info-modal__intro">
                    At IEEE SMC, we believe the best learning happens when you&apos;re having fun. Beyond the technical work, we organize activities that bring our community closer and create lasting memories.
                  </p>
                  <h3 className="info-modal__section-title">What We Do for Fun</h3>
                  <div className="fun-activities">
                    <div className="fun-activity">
                      <div className="fun-activity__emoji">💻</div>
                      <h4>Hackathons</h4>
                      <p>24-hour innovation sprints where teams build creative tech solutions.</p>
                    </div>
                    <div className="fun-activity">
                      <div className="fun-activity__emoji">🎤</div>
                      <h4>Debates</h4>
                      <p>Engaging discussions on tech trends, ethics, and the future of AI.</p>
                    </div>
                    <div className="fun-activity">
                      <div className="fun-activity__emoji">🎮</div>
                      <h4>Game Nights</h4>
                      <p>Casual evenings of board games, puzzles, and friendly competitions.</p>
                    </div>
                    <div className="fun-activity">
                      <div className="fun-activity__emoji">🏆</div>
                      <h4>Competitions</h4>
                      <p>We compete in regional and national IEEE competitions, winning as a team.</p>
                    </div>
                    <div className="fun-activity">
                      <div className="fun-activity__emoji">🌟</div>
                      <h4>Social Events</h4>
                      <p>Team outings, celebrations, and moments that make the journey worthwhile.</p>
                    </div>
                    <div className="fun-activity">
                      <div className="fun-activity__emoji">📸</div>
                      <h4>Creative Projects</h4>
                      <p>Photography, design, and multimedia projects that showcase our work.</p>
                    </div>
                  </div>
                  <h3 className="info-modal__section-title">Highlights</h3>
                  <div className="fun-gallery">
                    {achievementsData.slice(0, 6).map((a, i) => (
                      <div
                        key={i}
                        className="fun-gallery__item"
                        onClick={() => setSelected(a)}
                        role="button"
                        tabIndex={0}
                        aria-label={`View ${a.title}`}
                        onKeyDown={e => e.key === 'Enter' && setSelected(a)}
                      >
                        <img src={a.images[0]} alt={a.title} className="fun-gallery__img" loading="lazy" />
                        <div className="fun-gallery__overlay"><span>View →</span></div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
