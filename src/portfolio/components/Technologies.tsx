import { Technology } from "../../types/types"

export const Technologies = ({ techs }: { techs: Technology[] }) => {
    return (
        <ul className="tech">
            {
                techs.map((tech: any) => <li key={tech.id}><p>{tech.name}</p></li>)
            }
        </ul>
    )
}
