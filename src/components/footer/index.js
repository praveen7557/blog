import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className="contact-text">Contact: </div>
      <div>
        <a href="mailto:praveenb0800@gmail.com" target="blank">
          Mail
        </a>
        <a href="https://www.linkedin.com/in/praveenbolla" target="blank">
          LinkedIn
        </a>
        <a href="https://github.com/praveen7557" target="blank">
          Github
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=19URTjnF2r6rnReQu9b4LzzUToZmLceVC"
          target="blank"
        >
          Resume
        </a>
      </div>
    </footer>
  );
}
