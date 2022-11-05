import React from 'react'
import '../styles/MeStack.css'
import imgsMS from '../assets/imgsMS'

const MeStack = () => {
  return (
    <div className="meStack">
      <h2 className='flicker'>Mi stack</h2>
      <p className='description'>En esta seccion se encuentra todo lo relacionado con mi curva de aprendizajes y mis certificaciones mostrando tanto las tecnologias basicas como tambien diferentes metodos o tecnologias utilizadas en diferentes paginas o aplicaciones web</p>
      <article className="articleMeStack">
        <div className="icons">
          <img className="meStackIcon" src={imgsMS.img1} alt="html5_logo" />
          <img className="meStackIcon" src={imgsMS.img2} alt="css3_logo" />
          <img
            className="meStackIcon"
            src={imgsMS.img3}
            alt="javascript_logo"
          />
        </div>
        <div className="meStack-text">
          <h3>
            Fundamentos de la programación
            <a
              href="https://certificates.academlo.com/en/verify/30716456102592"
              target="_BLANK"
            >
              <img
                className="certf"
                src={imgsMS.img10}
                alt="certificate_icon"
              />
            </a>
          </h3>
          <hr />
          <p>
            habilidades necesarias para desarrollar de manera correcta la parte
            visual de un sitio web responsivo sin utilizar librerías/frameworks,
            así como agregar contenido dinámico con javascript, trabajar de
            manera colaborativa con git.
          </p>
        </div>
      </article>
      <article className="articleMeStack2">
        <div className="meStack-text">
          <h3>
            Desarrollo front-end
            <a href="https://certificates.academlo.com/en/verify/93055241346077">
              <img
                className="certf"
                src={imgsMS.img10}
                alt="certificate_icon"
              />
            </a>
          </h3>
          <hr />
          <p>
            Crear aplicaciones web con React JS, logrando una gran interacción
            con el usuario usando los conocimientos previos de HTML, CSS y
            Javascript.
          </p>
        </div>
        <div className="icons">
          <img className="meStackIcon" src={imgsMS.img4} alt="react_logo" />
          <img className="meStackIcon" src={imgsMS.img5} alt="bootstrap_logo" />
          <img className="meStackIcon" src={imgsMS.img6} alt="git_logo" />
        </div>
      </article>
      <article className="articleMeStack">
        <div className="icons">
          <img className="meStackIcon" src={imgsMS.img7} alt="nodejs_logo" />
          <img
            className="meStackIcon"
            src={imgsMS.img8}
            alt="sequelizejs_logo"
          />
          <img
            className="meStackIcon"
            src={imgsMS.img9}
            alt="postgresql_logo"
          />
        </div>
        <div className="meStack-text">
          <h3>
            Desarrollo back-end
            <a href="https://certificates.academlo.com/en/verify/57128504261252">
              <img
                className="certf"
                src={imgsMS.img10}
                alt="certificate_icon"
              />
            </a>
          </h3>
          <hr />
          construir una aplicación desde el servidor con NodeJS y ExpressJS desde 0
          hasta el despliegue en un servidor. Tendrá la habilidad de realizar
          una API Rest usando una base de datos relacional, autenticación de
          usuarios, seguridad ante ataques XSS y CSRF, podrá validar los datos
          que recibe el servidor y podrá construir middlewares personalizados
          con ExpressJS.
        </div>
      </article>
      <article>
        <h3>Otras tecnologias</h3>
        <div className="moreTechnologis"></div>
      </article>
    </div>
  )
}

export default MeStack
