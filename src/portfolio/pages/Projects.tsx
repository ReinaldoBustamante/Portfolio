import { IoLink, IoLogoGithub} from "react-icons/io5"
import { LuExternalLink } from "react-icons/lu"

export const Projects = () => {
  return (
    <div className="page-projects">
      <h1>Mis proyectos</h1>
      <div className="project-list">

        <div className="project-item">
          <img src="https://portfolio-images-reinaldo.s3.sa-east-1.amazonaws.com/Sin+t%C3%ADtulo.png" alt="" />
          <div className="content">
            <div className="text">
              <h2>Portafolio personal</h2>
              <p className="content-text">Una muestra de mis habilidades en desarrollo web, incluyendo tecnologías modernas y diseño responsivo.</p>
              <p className="content-text">technologias</p>
              <div className="interactive">
                <a href="https://github.com/ReinaldoBustamante/portfolio-v1" target="_blank" className="icon" aria-label="Ver perfil de GitHub"><IoLogoGithub /></a>
                <a href="https://reinaldobustamante.vercel.app/" target="_blank" className="icon" aria-label="Ver perfil de LinkedIn"><LuExternalLink /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="project-item">
          <img src="https://portfolio-images-reinaldo.s3.sa-east-1.amazonaws.com/Sin+t%C3%ADtulo.png" alt="" />
          <div className="content">
            <div className="text">
              <h2>Portafolio personal</h2>
              <p className="content-text">Primera version de mi portafolio personal</p>
              <p className="content-text">technologias</p>
              <div className="interactive">
                <a href="https://github.com/ReinaldoBustamante/portfolio-v1" target="_blank" className="icon" aria-label="Ver perfil de GitHub"><IoLogoGithub /></a>
                <a href="https://reinaldobustamante.vercel.app/" target="_blank" className="icon" aria-label="Ver perfil de LinkedIn"><IoLink /></a>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}
