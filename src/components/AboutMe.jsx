import React from 'react'
import '../styles/AboutMe.css'
import ilustration1 from '../assets/ilustration1.svg'
import { Link } from 'react-scroll'

const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="aboutMeItem">
        <img className="ilustration1" src={ilustration1} alt="" />
      </div>
      <div className="aboutMeItem infoAboutMe">
        <h2 className="flicker">Sobre mi</h2>
        <p>
          Soy alguien que esta dispuesto a todo, tanto aprender como descubrir a
          crear y enseñar. Una persona comunicativa, responsable y me siento
          capaz de cualquier cosa que se me proponga, si bien a veces puede
          costarme una cosa mas que otra, se que con la constancia y la
          perseverancia puedo lograr cada objetivo, tarea o reto que se me
          asigne. Si te gustaria saber mas de mi podes contactarme :D
        </p>
        <button className="btn-aboutMe">
          <a href="Ignacio-Escudero-CV.pdf" download={'Ignacio Escudero CV'}>
            Descargar CV
          </a>
        </button>
      </div>
    </section>
  )
}

export default AboutMe
