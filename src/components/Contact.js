import React from 'react'
import img from '../img/Allura - Giant Phone.png'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Contact() {
  return (
    <div className="contact" id="contact">
      <h1 className="header">Let's get connected!</h1>
      <div className="container">
        <div className="img-3">
          <img src={img} alt="boy and big Phone" />
        </div>
        <div className="div-2">
          <div className="social-media">
            <a
              href="https://twitter.com/Lakira_md?ref_src=twsrc%5Etfw"
              data-show-count="false"
              target="_blank" rel="noreferrer"
            >
              <div className="social-icon">
                <FaTwitter />
              </div>
            </a>
            <a href="https://instagram.com/youth_coder" target="_blank" rel="noreferrer">
              <div className="social-icon">
                <FaInstagram />
              </div>
            </a>
            <a href="https://www.linkedin.com/in/lakira-md/" target="_blank" rel="noreferrer">
              <div className="social-icon">
                <FaLinkedin/>
              </div>
            </a>
            <a href="https://github.com/LakiraMD" target="_blank" rel="noreferrer">
              <div className="social-icon" id="github">
                <FaGithub />
              </div>
            </a>
            {/* <div className="social-icon">

</div> */}
          </div>
          <div className="contact-form">
            {/* <form
              action="https://formsubmit.co/mdlakiramd@gmail.com"
              method="POST"
              className="form"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="form-input form-text"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="form-input form-text"
              />
              <input type="hidden" name="_captcha" value="false" />
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="7"
                required
                className="form-input form-textbox"
              ></textarea>
              <button type="submit" className="btn btn-submit">Send</button>
            </form> */}
          </div>
        </div>
      </div>
      <footer>Made with 💖</footer>
    </div>
  )
}

export default Contact
