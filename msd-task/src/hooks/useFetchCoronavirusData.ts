import useSWR from "swr";
import { ChartType } from "../consts/chart";
import { getChartData } from "../consts/chart-data";

// const AreaType = "nation";
// const AreaName = "england";

// const filters = [
//     `areaType=${AreaType}`,
//     `areaName=${AreaName}`
// ]

// const structure = {
//     date: "date",
//     name: "areaName",
//     dailyCases: "newCasesByPublishDate",
//     dailyDeaths: "newDeaths28DaysByPublishDate",
// };

export default function useFetchCoronavirusData(chart:ChartType) {
    const url = getChartData().get(chart).url;
    const fetcher = (apiURL:string) => fetch(apiURL).then(res => res.json());
    const { data, error } = useSWR(url, fetcher);
    return { data, error };
}