import useSWR from "swr";
import { ICoronavirusData } from "../types/coronavirus-data";

export default function useFetchCoronavirusData<TData>(url:string) {
    const fetcher = (apiURL:string) => fetch(apiURL).then(res => res.json());
    const { data, error } = useSWR<ICoronavirusData<TData>>(url, fetcher);
    return { data, error };
}