import { Experience } from "../../types/types"
import { useFetch } from "../hooks/useFetch"
import { ExperienceItem } from "./ExperienceItem"

export const ExperienceList = () => {
    const { data: laboralExperience } = useFetch<Experience>("https://api3.reinaldobustamante.dev/api/experience")
    
    return (
        <div className="experience">
            <div className="time-line" />
            <ul className="work">
                {
                    laboralExperience.map(experience => {
                        return <ExperienceItem experience={experience} key={experience.id} />
                    })
                }
            </ul>
        </div>
    )
}
