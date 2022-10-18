export interface ICoronavirusData<TData> {
    data: TData[],
    length: number,
    maxPageLimit: number,
    pagination: any,
    requestPayload: any,
    totalRecords: number
}

