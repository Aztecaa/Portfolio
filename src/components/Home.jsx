import React from 'react'
import '../styles/Home.css'
import videoBg from '../assets/videoBg.mp4'
import wave from '../assets/wave.svg'

const Home = () => {
  return (
    <section id="home">
      <video
        className="videoBg"
        src={videoBg}
        autoPlay
        loop
        muted
        disablePictureInPicture
      />
      <div className="homeMe" style={{ color: '#fff' }}>
        <img className="MyPhoto" src="Me.jpeg" alt="" />
        <h1 className="homeText" style={{ marginBottom: '5px' }}>
          Ignacio Gabriel Escudero
        </h1>
        <hr />
        <h3
          className="homeText"
          style={{
            letterSpacing: '1px',
          }}
        >
          Frontend development
        </h3>
      </div>
      <img className="wave" src={wave} alt="wave" />
    </section>
  )
}

export default Home
