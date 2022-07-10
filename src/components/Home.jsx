import React , {useRef} from 'react'
import image1 from '../img/boy.png'
import { useSpring, animated } from 'react-spring'

function Home() {


  const anime1 = useSpring({
    config: { duration: 1000 },
    from: { x: -100 },
    to: { x: 0 },
  })
  const anime2 = useSpring({
    config: { duration: 1000 },
    from: { y: -100 },
    to: { y: 0 },
  })


  const anime3 = useSpring({
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  // console.log(window.innerWidth);
  return (
    <div className="bio" id="bio">
      <div className="div-1">
        <div className="bubble">
          <animated.div style={window.innerWidth >= 768 ? anime1 : anime2} className="para">
            <p className="intro">Hi there! My name is</p>
            <p className="name">Lakira Minalaka</p>
            <p className="about">I'm a Web Dev, Student, Programmer, Blogger</p>
          </animated.div>
        </div>
      </div>
      <animated.div className="img" style={anime3}>
        <img src={image1} alt="boy and a computer" />
      </animated.div>
    </div>
  )
}

export default Home
