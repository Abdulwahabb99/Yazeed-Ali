import React from "react";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <img className="me" src="./assets/images/yazeed-pic.jpeg" alt="Me" />
      <div className="designation-wrap">
        <span className="designation-badge">Senior Software Engineer</span>
      </div>
      <h2 className="email">engyazeedali@gmail.com</h2>
      <h2 className="address">Tuwaiq Dist, Riyadh, Saudi Arabia</h2>
      {/* <p className="copyright">&copy; 2025 Yazeed Ali. All Rights Reserved</p> */}
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a
            href="https://linkedin.com/in/engyazeedali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
