import { Experience } from "../../types/types"
import { useDate } from "../hooks/useDate"
import { Technologies } from "./Technologies"


export const ExperienceItem = ({ experience }: { experience: Experience }) => {
    const { company_name, occupation, init_date, end_date, description, technologies } = experience
    const { initMonth, initYear, endMonth, endYear } = useDate(init_date, end_date)


    return (
        <li className="work-item">
            <div className="indicator" />
            <div className="description">
                <h3>{company_name}</h3>
                <p className="occupation">{occupation}</p>
                <p className="date">{initMonth}. {initYear} - {endMonth}. {endYear}</p>
                <p className="resume">{description}</p>
                <Technologies techs={technologies} />
            </div>
        </li>
    )
}
