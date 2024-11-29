export const Career = () => {

  const laboralExperience = [
    {
      id: 1,
      company: 'Lythium',
      ocupation: 'Desarrollador de software (freelancer)',
      init: 'jun. 2024',
      end: 'oct. 2024',
      description: 'Trabajé en la plataforma Fishbyte, desarrollando un sistema de carpetas para gestionar reportes de enfermedades en salmón. Implementé funcionalidades para descargas masivas en CSV y JSON, y realicé migraciones de datos mediante un proceso ETL utilizando Node.js y la API de Strapi.',
      techs: [
        {
          id: 1,
          name: 'Node.js'
        },
        {
          id: 2,
          name: 'Next.js'
        },
        {
          id: 2,
          name: 'Javascript.js'
        },
        {
          id: 2,
          name: 'Typescript.js'
        },
        {
          id: 3,
          name: 'Strapi'
        }
      ]
    },
    {
      id: 2,
      company: 'Universidad Austral de Chile',
      ocupation: 'Desarrollador de software',
      init: 'mar. 2023',
      end: 'may. 2024',
      description: 'Participé en el proyecto FONDECYT 11220709, desarrollando un dashboard para profesores que permite el seguimiento detallado del avance de los alumnos en una plataforma de tutoría inteligente.',
      techs: [
        {
          id: 1,
          name: 'Next.js'
        },
        {
          id: 2,
          name: 'Graphql.js'
        },
        {
          id: 3,
          name: 'Postgresql'
        },
        {
          id: 2,
          name: 'Typescript.js'
        },
      ]
    },
    {
      id: 2,
      company: 'Universidad Austral de Chile',
      ocupation: 'Practicante QA',
      init: 'ene. 2023',
      end: 'mar. 2023',
      description: 'Encargado del plan de pruebas y control de calidad del software, incluyendo la ejecución y documentación de pruebas funcionales manuales del contenido de la plataforma de tutoría inteligente',
      techs: [
        {
          id: 1,
          name: 'Excel'
        },
        {
          id: 2,
          name: 'Postman'
        },
        {
          id: 3,
          name: 'Next.js'
        }
      ]
    }
  ]

  return (
    <div className="page-career">
      <h1>Experiencia</h1>
      <div className="experience">
        <div className="time-line"></div>
        <div className="work">
          {
            laboralExperience.map(experience => {
              return <div className="work-item" key={experience.id}>
                <div className="indicator" />
                <div className="description">
                  <h3>{experience.company}</h3>
                  <p className="occupation">{experience.ocupation}</p>
                  <p className="date">{experience.init} - {experience.end}</p>
                  <p className="resume">{experience.description}</p>
                  <div className="tech">
                    {
                      experience.techs.map(tech => <p key={tech.id}>{tech.name}</p>)
                    }
                  </div>
                </div>
              </div>
            })
          }

        </div>
      </div>
    </div>
  )
}