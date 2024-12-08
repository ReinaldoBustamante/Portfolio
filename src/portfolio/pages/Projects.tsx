import { IoLogoGithub } from "react-icons/io5"
import { LuExternalLink } from "react-icons/lu"
import { useFetch } from "../hooks/useFetch"
import { Project } from "../../types/types"
import { Technologies } from "../components/Technologies"

export const Projects = () => {
  const { data } = useFetch<Project>('https://api3.reinaldobustamante.dev/api/project')
  return (
    <div className="page-projects">
      <h1>Mis proyectos</h1>
      <div className="project-list">
        {
          data.map(project => {
            const { id, title, description, demo_url, img_url, repository_url, technologies } = project
            const paragraphs = description.split('\n')

            return (
              <div className="project-item" key={id}>
                <div className="content-wrapper">
                  <img src={img_url} alt="" />
                  <div className="content">
                    <div className="text">
                      <h2>{title}</h2>
                      {paragraphs.map(paragraph => <p className="content-text" key={paragraph}>{paragraph}</p>)}

                      <Technologies techs={technologies} />
                      <div className="interactive">
                        <a href={repository_url} target="_blank" className="icon" aria-label="Ver perfil de GitHub"><IoLogoGithub /></a>
                        <a href={demo_url} target="_blank" className="icon" aria-label="ver demo"><LuExternalLink /></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )
          })
        }



      </div>
    </div>

  )
}
