import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lightbox from 'lightbox2';
import 'lightbox2/dist/css/lightbox.min.css';

export default function Portfolio() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        Lightbox.option({
          resizeDuration: 200,
          fadeDuration: 600,
          imageFadeDuration: 600,
          wrapAround: true
        });
      }, []);
  return (
    <section className="portfolio-area page-section scroll-to-page" id="portfolio">
        <div className="custom-container">
            <div className="portfolio-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-grip-vertical"></i> portfolio
                    </h4>
                    <h1 className="scroll-animation">Featured <span>Projects</span></h1>
                </div>

                <div className="row portfolio-items">
                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-full">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio1.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio1.jpg" alt="Glarewave"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">.NET Core</a></li>
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">DICOMweb</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Glarewave — Medical Imaging Platform</a></h2>
                            <p className="portfolio-desc">Developed a .NET Core and React-based medical imaging platform using DICOMweb, featuring AI-assisted analysis and secure image sharing to modernize radiology workflows. Aug 2025 - Sep 2025</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio2.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio2.jpg" alt="ROP Screening"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">.NET Core</a></li>
                                    <li><a href="#">MongoDB</a></li>
                                    <li><a href="#">DICOM</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">ROP Screening System</a></h2>
                            <p className="portfolio-desc">Client: KKESH. .NET Core + MongoDB platform with DICOM integration for neonatal eye exams, AI-assisted analysis and real-time dashboards. Apr 2025 - Jun 2025</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio3.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio3.jpg" alt="Tanfeeth"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">.NET Core</a></li>
                                    <li><a href="#">Nafath</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Tanfeeth Integrated Platform</a></h2>
                            <p className="portfolio-desc">Client: KKESH. .NET Core APIs with Nafath authentication for multi-step digital form submission, DTO mapping and validation pipelines. May 2025 - Jun 2025</p>
                        </div>
                    </div>

                    <div className="col-md-12 scroll-animation" data-aos='fade-up'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio4.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio4.jpg" alt="Patient Portal"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">.NET Core</a></li>
                                    <li><a href="#">PLG Stack</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Patient Portal</a></h2>
                            <p className="portfolio-desc">Client: KKESH. .NET Core-based platform with PLG monitoring for secure access to records, appointments, and DICOM imaging. Mar 2025 - May 2025</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-right'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio5.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio5.jpg" alt="Attendance App"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">.NET Core</a></li>
                                    <li><a href="#">Flutter</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Attendance Mobile Application</a></h2>
                            <p className="portfolio-desc">Client: RCJY. .NET Core and Flutter-based app with real-time check-ins, geolocation validation, HR system sync. Apr 2024 - Aug 2024</p>
                        </div>
                    </div>

                    <div className="col-md-6 scroll-animation" data-aos='fade-left'>
                        <div className="portfolio-item portfolio-half">
                            <div className="portfolio-item-inner">
                                <a href="../assets/images/portfolio1.jpg" data-lightbox="example-1">
                                    <img src="../assets/images/portfolio1.jpg" alt="Aqdim"/>
                                </a>
                                <ul className="portfolio-categories">
                                    <li><a href="#">Agile</a></li>
                                    <li><a href="#">Scrum</a></li>
                                </ul>
                            </div>
                            <h2><a href="#">Aqdim Platform</a></h2>
                            <p className="portfolio-desc">Client: Business Hub. Led end-to-end development, coached team in Agile/Scrum, Lean principles, sprint planning. Jun 2021 - Sep 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
