export type AdmittedToHospitalByAge = {
    date: string,
    cumAdmissionsByAge: CumAdmissionsByAge[]
}

export type CumAdmissionsByAge = {
    age: string,
    rate: number,
    value: number,
    percentage: number
}