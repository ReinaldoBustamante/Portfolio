import { laboralExperience } from "../data/experience"
import { ExperienceItem } from "./ExperienceItem"

export const ExperienceList = () => {
    return (
        <div className="experience">
            <div className="time-line" />
            <ul className="work">
                {
                    laboralExperience.map(experience => {
                        return <ExperienceItem experience = {experience}  key={experience.id} />
                    })
                }
            </ul>
        </div>
    )
}
