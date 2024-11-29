import { Technologies } from "../components/Technologies"

export const Projects = () => {
  return (
    <div className="page-projects">
      <h1>Mis proyectos</h1>
      <div className="project-list">

        <div className="project-item">
          <img src="/src/assets/project-portfolio.png" alt="" />
          <h2 className="project-title">Portafolio personal</h2>
          <p>Portafolio personal, diseñado para destacar mis habilidades como desarrollador full stack, mi experiencia y los proyectos personales en los que he trabajado.</p>
          <Technologies techs={[{ id: 1, name: 'React.js' }, { id: 2, name: 'Typescript' }, { id: 3, name: 'Sass' }]} />
          <div className="buttons">
            <button>Demo</button>
            <button>Source</button>
          </div>
        </div>

        <div className="project-item">
          <img src="/src/assets/project-portfolio.png" alt="" />
          <h2 className="project-title">Portafolio personal</h2>
          <p>Portafolio personal, diseñado para destacar mis habilidades como desarrollador full stack, mi experiencia y los proyectos personales en los que he trabajado.</p>
          <Technologies techs={[{ id: 1, name: 'React.js' }, { id: 2, name: 'Typescript' }, { id: 3, name: 'Sass' }]} />
          <div className="buttons">
            <button>Demo</button>
            <button>Source</button>
          </div>
        </div>

      </div>
    </div>

  )
}
