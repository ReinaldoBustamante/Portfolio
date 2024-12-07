
export const useDate = (init_date: Date, end_date: Date) => {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const initDate = new Date(init_date)
    const endDate = new Date(end_date)

    const initMonth = months[initDate.getMonth()]
    const initYear = initDate.getFullYear()
    const endMonth = months[endDate.getMonth()]
    const endYear = endDate.getFullYear()
    return {
        initMonth,
        initYear,
        endMonth,
        endYear
    }

}