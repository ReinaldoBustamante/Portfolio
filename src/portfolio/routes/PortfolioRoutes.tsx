import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Career, Projects } from '../pages'


export const PortfolioRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/career' element={<Career />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}
