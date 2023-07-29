import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/Home.css'

const Home = () => {
  const gitHub = "https://github.com/NimraMushtaq"
  const linkedIn = "https://www.linkedin.com/in/nimra-mushtaq-khan/"
  return (
    <div className="home">
      <div className="about">
        <h2>Hey,I am Nimra Mushtaq</h2>
        <div className="prompt">
          <p>A passionate web developer on a constant quest to create meaningful and cutting-edge experiences. 🚀💻</p>
          <FaEnvelope />
          <a href={linkedIn} target='_blank' rel="noreferrer">  <FaLinkedin /></a>
          <a href={gitHub} target='_blank' rel="noreferrer"> <FaGithub /></a>


        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front End</h2>
            <span>
              HTML, CSS, JQuery, Bootstrap, React Js, MaterialUI, TailwindCSS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Javascript, Python, Java, C++, Typescript, PHP
            </span>
          </li>

        </ol>
      </div>

    </div>);
}


export default Home;