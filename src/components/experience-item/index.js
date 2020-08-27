import React from 'react';
import './experience-item.scss';

export default function ExperienceItem({ item }) {
  const {
    role,
    location,
    company,
    dates,
    logo,
    description,
    tags = [],
    className,
    active = '',
  } = item;
  return (
    <div className={`experience-item ${className} ${active && 'active'}`}>
      <div className="logistics">
        <div className="location">{location}</div>
        <div className="dates">{dates}</div>
      </div>
      <div className="details">
        <div className="pic-container">
          <div className="pic">
            <img src={logo} alt={company} />
          </div>
          <div className="name mobile">
            {role} - <span className="company">{company}</span>
          </div>
        </div>
        <div className="role">
          <div className="name desktop">
            {role} - <span className="company">{company}</span>
          </div>
          <div className="description">
            {description}{' '}
            {tags.map(e => (
              <span className="tag" key={e}>
                {e}
                {'  '}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
