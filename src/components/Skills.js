import React ,{useEffect} from 'react'
import { SiCss3, SiFigma, SiGit, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiPython, SiReact, SiSass, SiSolidity, SiTypescript, SiWindowsterminal } from 'react-icons/si'
import boy from '../img/boy2.webp'
import { useSpring, animated, to } from 'react-spring'
import { useScroll } from '@use-gesture/react'


// import { useEffect } from 'react'

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1 className="header">My Stack</h1>
      <div className="container" >
        <div className="img-2" data-aos="fade-right"><img src={boy} alt="boy works" /></div>
        <div className="div2">
          <div className="skills-grid" data-aos="fade-left">
            <div className="skill" id="Javascript">
              <SiJavascript />
            </div>
            <div className="skill" id="HTML">
              <SiHtml5 />
            </div>
            <div className="skill" id="CSS">
              <SiCss3 />
            </div>
            <div className="skill" id="ReactJS">
              <SiReact />
            </div>
            <div className="skill" id="Nodejs">
              <SiNodedotjs />
            </div>
            <div className="skill" id="Sass">
              <SiSass />
            </div>
            <div className="skill" id="Typescript">
              <SiTypescript />
            </div>
            <div className="skill" id="Python">
              <SiPython />
            </div>
            <div className="skill" id="MongoDB">
              <SiMongodb />
            </div>
            <div className="skill" id="Solidity">
              <SiSolidity />
            </div>
            <div className="skill" id="Solidity">
              <SiFigma />
            </div>
            <div className="skill" id="Solidity">
              <SiGit />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
