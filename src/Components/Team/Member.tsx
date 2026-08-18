import { FC } from 'react';

interface Props {
  image: string;
  name: string;
  position: string;
  idx: number;
  isInView: boolean;
  theme : string
  linkedin?: string;
  facebook?: string;
}

const positionIcons: { [key: string]: string } = {
  'CHAIR': 'ri-user-star-fill',
  'VICE CHAIR': 'ri-user-fill',
  'SECRETARY': 'ri-file-text-fill',
  'TRESURER': 'ri-bank-fill',
  'WEB MASTER': 'ri-code-box-fill',
  'MEDIA MANAGER': 'ri-camera-fill',
  'COUNSELOR': 'ri-user-heart-fill',
};

export const Member: FC<Props> = ({ image, name, position, idx, isInView,theme,linkedin, facebook }) => {
  const textColor = theme === '' ? '#ffffff' : '#000000';
  return (
    <div
      className="team__item"
      style={{
        transform: isInView ? 'none' : 'translateY(100%)',
        opacity: isInView ? 1 : 0,
        transition: `all ${(idx + 1) / 2}s ease-out 0.2s`,
      }}
    >
      <div className="team__img">
        <img src={image} alt="team-member" />
      </div>
      <div className="team__details">
        <h4>{name}</h4>
        <p className="description">
          <i
            className={positionIcons[position] || 'ri-user-fill'}
            style={{ color: 'var(--primary-color)' }} // Apply primary color to the icon
          />
           <span style={{ color: textColor }}>
            {position}
          </span>
        </p>
        <div className="team__member-social">
        {linkedin && (
          <a
           href={linkedin}
            className="social-icon linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-box-fill" />
          </a>
        )}

        {facebook && (
          <a
            href={facebook}
            className="social-icon facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-facebook-fill" />
          </a>
        )}
       </div>
      </div>
    </div>
  );
};
