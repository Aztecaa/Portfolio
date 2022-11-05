import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-scroll'
import github from '../assets/navbar/github.svg'
import linkedin from '../assets/navbar/linkedin.svg'
import cv from '../assets/navbar/cv.svg'

const NavBar = () => {
  return (
    <div className="NavBar" style={{ color: '#fff' }}>
      <div className="seccions">
        <Link className="link" to="home" smooth={true}>
          Inicio
        </Link>
        <Link className="link" to="aboutMe" smooth={true}>
          Sobre mi
        </Link>
        <Link className="link" to="meStack" smooth={true}>
          Mi Stack
        </Link>
        <Link className="link" to="portfolio" smooth={true}>
          Portafolio
        </Link>
        <Link className="link" to="contant" smooth={true}>
          Contacto
        </Link>
      </div>
      <div className="aIcons">
        <a className="navA" href="https://github.com/Aztecaa" target="_BLANK">
          <img className="navBarIcon" src={github} alt="" />
        </a>
        <a className="navA" href="https://www.linkedin.com/in/ignacio-escudero-a8a651222/" target="_BLANK">
          <img className="navBarIcon" src={linkedin} alt="" />
        </a>
        <a className="navA" href="Ignacio-Escudero-CV.pdf" download={"Ignacio Escudero CV"}>
          <img className="navBarIcon" src={cv} alt="" />
        </a>
      </div>
    </div>
  )
}

export default NavBar
