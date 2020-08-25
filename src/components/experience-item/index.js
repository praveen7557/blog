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
  } = item;
  return (
    <div className={`experience-item ${className}`}>
      <div className="logistics">
        <div className="location">{location}</div>
        <div className="dates">{dates}</div>
      </div>
      <div className="details">
        <div className="pic">
          <img src={logo} alt={company} />
        </div>
        <div className="role">
          <div className="name">
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
