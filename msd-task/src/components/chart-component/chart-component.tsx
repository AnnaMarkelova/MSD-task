import { Chart } from "@antv/g2";
import { useEffect, useRef } from "react";
import Loader from "../loader/loader";
import NoData from "../no-data/no-data";

interface ChartComponentProps {
    data: any,
    error: any
    setChart: (chart: Chart) => void
}

export default function ChartComponent({ data, error, setChart }: ChartComponentProps) {

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (data == null || ref.current == null) return;

        const chart = new Chart({
            container: ref.current,
            autoFit: true,
            height: 500,
        });

        chart.data(data);

        setChart(chart);

        chart.render();

        return () => chart.destroy();
    }, [data, ref, setChart])

    if (error) return <NoData />;
    if (!data) return <Loader />;

    return (
        <div>
            <div ref={ref} />
        </div>
    );
}