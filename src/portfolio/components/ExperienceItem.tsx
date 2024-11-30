import { Experience } from "../../types/types"
import { Technologies } from "./Technologies"


export const ExperienceItem = ({ experience }: { experience: Experience }) => {
    return (
        <li className="work-item">
            <div className="indicator" />
            <div className="description">
                <h3>{experience.company}</h3>
                <p className="occupation">{experience.ocupation}</p>
                <p className="date">{experience.init} - {experience.end}</p>
                <p className="resume">{experience.description}</p>
                <Technologies techs={experience.techs} />
            </div>
        </li>
    )
}
