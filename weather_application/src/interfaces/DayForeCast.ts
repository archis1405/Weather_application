{/* Stores the data for the week only */}

export default interface DayForecast {
    date:string,
    avgtemp_c: number,
    avgtemp_f: number,
    condition: string,
}