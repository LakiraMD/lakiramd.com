import React from 'react'
import img from '../img/propic-2.jpg'

function About() {
  return (
    <div className="about" id="about">
      <div className="profile-pic">
        <img src={img} alt="lakira-md" data-aos="fade-in" />
      </div>
      <div className="myself" data-aos="fade-in">
        <h1 className="header">About Me</h1>
        <p >
        Hi there, I'm Lakira Minlaka, a 15 years old self-taught passionate
        Frontend Web developer. I live in Galle, Sri Lanka and I'm currently a
        grade 10 student at Royal Collage Colombo. I work a lot with things like
        JacaScript, HTML, CSS, React Js, and so on.
        </p>
      </div>
    </div>
  )
}

export default About
