import React from "react";

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-">
        <img
          src="./assets/images/logo-yazeed.png"
          alt="Logo"
          style={{
            width: "70%",
            maxWidth: 450,
          }}
        />
        <span className="designation" style={{ marginRight: "50px" , textAlign: "left" }}>
          Senior Software Engineer
        </span>
      </div>
      <img className="me" src="./assets/images/yazeed-pic.jpeg" alt="Me" />
      <h2 className="email">engyazeedali@gmail.com</h2>
      <h2 className="address">Tuwaiq Dist, Riyadh, Saudi Arabia</h2>
      <p className="copyright">&copy; 2025 Yazeed Ali. All Rights Reserved</p>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://linkedin.com/in/engyazeedali" target="_blank" rel="noopener noreferrer">
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a href="#contact" className="theme-btn">
        <i className="las la-envelope"></i> Hire Me!
      </a>
    </div>
  );
}
