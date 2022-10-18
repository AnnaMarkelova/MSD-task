import useSWR from "swr";

export default function useFetchCoronavirusData(url:string) {
    const fetcher = (apiURL:string) => fetch(apiURL).then(res => res.json());
    const { data, error } = useSWR(url, fetcher);
    return { data, error };
}