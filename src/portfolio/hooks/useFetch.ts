import { useEffect, useState } from "react"

export const useFetch = <T>(url: string): {data: T[], isLoading: boolean} => {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = async () => {
        const resp = await fetch(url)
        const data = await resp.json()
        data.sort((a: any, b: any) => b.id - a.id)
        setData(data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
       
    }, [])

    return {
        data,
        isLoading
    }
}