import { Experience, Technology } from "../../types/types"

export const Technologies = ({ techs }: { techs: Technology[] }) => {
    return (
        <ul className="tech">
            {
                techs.map((tech: any) => <li><p key={tech.id}>{tech.name}</p></li>)
            }
        </ul>
    )
}
