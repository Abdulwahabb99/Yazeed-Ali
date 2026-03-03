import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Enterprise Development</h2>
                        <p>.NET Core, ASP.NET MVC, Web API, React.js — scalable applications with clean architecture and microservices</p>
                        <span className="projects">Enterprise Apps</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-server"></i>
                        <h2>DevOps & Infrastructure</h2>
                        <p>Azure DevOps Pipelines, Docker, PLG Stack (Prometheus, Loki, Grafana), CI/CD automation and monitoring</p>
                        <span className="projects">35% Reliability</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-heartbeat"></i>
                        <h2>Healthcare & FinTech</h2>
                        <p>DICOM imaging, patient portals, SAMA-compliant solutions, secure APIs and system integration</p>
                        <span className="projects">Digital Health</span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
