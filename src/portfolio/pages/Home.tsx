import { IoArrowForwardSharp, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const Home = () => {
  return (
    <div className="page-home">
      <h1 className="title">
        <p className="line title">Hola!,</p>
        <p className="line title">Soy Reinaldo </p>
        <p className="line marker sub-title">Desarrollador Full-Stack</p>
      </h1>
      <p>
        Mi enfoque esta en crear soluciones web completas y centradas en el usuario utilizando tecnologías como <span className="marker">Node.js</span>, <span className="marker">React.js</span> y <span className="marker">Express</span>.
      </p>
      <button className="projects">
        <p>Conoce mis proyectos </p>
        <IoArrowForwardSharp className="icon"/>
      </button>
      <section>
        <h2>Puedes encontrarme en:</h2>
        <div className="social">
          <a href="https://www.linkedin.com/in/rbust/" target="_blank" className="icon" aria-label="Ver perfil de LinkedIn"><IoLogoLinkedin /></a>
          <a href="https://github.com/ReinaldoBustamante/" target="_blank" className="icon" aria-label="Ver perfil de GitHub"><IoLogoGithub /></a>
        </div>
      </section>

    </div>
  )
}