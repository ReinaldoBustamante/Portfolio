import { useState } from "react"

export const useTheme = () => {
	const [darkMode, setDarkMode] = useState<boolean | null>(null)

	const toggleMode = () => {
		setDarkMode(!darkMode)
	}

	return {
		darkMode,
		toggleMode
	}

}
