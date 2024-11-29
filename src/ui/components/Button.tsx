
import { useNavigate } from 'react-router-dom'

interface ButtonProps {
    label: string;
    path: string;
}

export const Button = ({
    label,
    path
}: ButtonProps) => {

    const navigate = useNavigate()
    return (
        <button className='btn btn-primary' onClick={() => navigate(path)}>{label}</button>
    )
}