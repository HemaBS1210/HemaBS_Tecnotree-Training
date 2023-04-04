import React from 'react';
// import './style.css';

function protp() {
  return (
    <div>
      <header>
        <h1>Personal Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <section id="about">
            <div id="about-container">
              <img src="WhatsApp Image 2023-03-03 at 3.06.19 PM.jpeg" alt="Hema B S" width="100" height="100" />
              <p>I am from GSSSIETW.</p>
            </div>
          </section>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div id="projects-container"></div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
        </section>
        <section id="resume">
          <h2>Resume</h2>
          <a href="resume.pdf" download>Download Resume</a>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form id="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Personal Portfolio</p>
      </footer>
    </div>
  );
}
export default protp;
