import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="about-area page-section scroll-to-page" id="about">
        <div className="custom-container">
            <div className="about-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="lar la-user"></i> About
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Every great solution begins with<br/>
                        an even <span>better story</span></h1>
                </div>
                <p className="scroll-animation" data-aos='fade-up'>Senior Software Engineer & Technical Lead with over 6 years of experience in enterprise development, system integration, and PLG-stack monitoring. At KKESH, led DevOps automation that improved performance and reliability by 35% within one year, driving innovation and digital healthcare transformation. Passionate about building scalable solutions, mentoring teams, and delivering high-impact digital products.</p>
            </div>
        </div>
    </section>
  )
}
