import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Feb 2025 - Present</span>
                        <h2>Senior Software Engineer & Technical Lead</h2>
                        <p>King Khaled Eye Specialist Hospital (KKESH) — Riyadh</p>
                        <p className="resume-detail">Led DevOps automation, enhanced DICOM imaging and Patient Portal platforms (35% faster performance), integrated PLG stack for monitoring.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Mar 2024 - Feb 2025</span>
                        <h2>Senior Web Developer</h2>
                        <p>Royal Commission for Jubail and Yanbu (RCJY) — Yanbu</p>
                        <p className="resume-detail">Designed scalable enterprise apps with .NET Core, developed Attendance Mobile Application (25% performance increase), enhanced DevOps workflows.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Jun 2022 - May 2023</span>
                        <h2>Application Support Engineer</h2>
                        <p>Digital Payments for Financial Technology Company — Riyadh</p>
                        <p className="resume-detail">Led requirement validation, built FinTech solutions with SAMA compliance, improved transaction reliability by 30%.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Jun 2021 - Jun 2022</span>
                        <h2>Software Engineer</h2>
                        <p>Business Hub — Medina</p>
                        <p className="resume-detail">Engineered Node.js and React-based online learning platform using Agile/Scrum, scalable architecture, and optimized API integration.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Oct 2020 - Jun 2021</span>
                        <h2>Applications Developer</h2>
                        <p>Rabea Taybah for Caring of Renal Failure Patients — Medina</p>
                        <p className="resume-detail">.NET Developer for database management, Microsoft services, website development, and network/server administration.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Jan 2020 - Oct 2020</span>
                        <h2>Development Manager</h2>
                        <p>Haraka Etqan — Medina</p>
                        <p className="resume-detail">Developed web and mobile apps, implemented Odoo HR systems, upgraded email, hardware, and network infrastructures.</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Education</span>
                        <h2>Bachelor of Science in Software Engineering</h2>
                        <p>King Fahd University of Petroleum and Minerals (KFUPM) — Dhahran</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
