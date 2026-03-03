import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              My <span>Advantages</span>
            </h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <img
                    src="../assets/images/react.png"
                    alt="React"
                    style={{ width: 48, height: 48, objectFit: "contain" }}
                  />
                  <h1 className="percent">90%</h1>
                </div>
                <p className="name">React.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="lab la-microsoft"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">92%</h1>
                </div>
                <p className="name">.NET Core</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-down">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="lab la-node-js"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">88%</h1>
                </div>
                <p className="name">Node.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-left">
              <div className="skill">
                <div className="skill-inner">
                  <i className="lab la-js" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">90%</h1>
                </div>
                <p className="name">JavaScript/TS</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-right">
              <div className="skill">
                <div className="skill-inner">
                  <i className="lab la-docker" style={{ fontSize: "48px" }}></i>
                  <h1 className="percent">85%</h1>
                </div>
                <p className="name">Docker</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos="fade-up">
              <div className="skill">
                <div className="skill-inner">
                  <i
                    className="las la-database"
                    style={{ fontSize: "48px" }}
                  ></i>
                  <h1 className="percent">88%</h1>
                </div>
                <p className="name">SQL/MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
