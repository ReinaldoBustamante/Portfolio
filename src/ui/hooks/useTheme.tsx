import { useState } from "react"

export const useTheme = () => {
	const localDark = localStorage.getItem('dark')
	const init = localDark !== null ? JSON.parse(localDark) : null
	const [darkMode, setDarkMode] = useState<boolean | null>(init)

	const toggleMode = () => {
		setDarkMode(!darkMode)
		localStorage.setItem('dark', JSON.stringify(!darkMode))
	}

	return {
		darkMode,
		toggleMode
	}

}
