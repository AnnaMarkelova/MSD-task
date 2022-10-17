import { useRef } from 'react';
import { ChartType } from '../../consts/chart';
import useChart from '../../hooks/useChart';
import useFetchCoronavirusData from '../../hooks/useFetchCoronavirusData';
import Loader from '../loader/loader';
import NoData from '../no-data/no-data';

interface ChartProps {
    chartType: ChartType,
}

export default function Chart({ chartType }: ChartProps) {
    
    const { data, error } = useFetchCoronavirusData(chartType);
    console.log(data);

    const ref = useRef<HTMLDivElement>(null);

    useChart(ref, data, chartType);

    if (error) return <NoData />;
    if (!data) return <Loader />;

    return (
        <div>
            <div ref={ref} />
        </div>
    );
}