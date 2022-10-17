import { Chart } from "@antv/g2";
import { RefObject, useEffect } from "react";
import { ChartType } from "../consts/chart";

export default function useChart(ref: RefObject<HTMLDivElement>, data: { data: [] }, chartType: ChartType) {
    useEffect(() => {
        if (!ref || !data || ref.current == null) return;

        const chart = new Chart({
            container: ref.current,
            autoFit: true,
            height: 500,
        });

        chart.data(data.data);

        if (chartType === ChartType.ChartVaccinated) {
            getChartVaccinated(chart);
        }
        if (chartType === ChartType.ChartCasesAndDeath) {
            getChartCasesAndDeath(chart);
        }

        chart.render();

        return () => chart.destroy();
    }, [data, ref, chartType])

};

const getChartVaccinated = (chart: Chart) => {
    chart.scale({
        Date: {
            tickCount: 10
        },
        Vaccinated: {
            nice: true,
        }
    });

    chart.axis('vaccinated', {
        label: {
            formatter: (val: string) => {
                return +val / 1000000 + 'M';
            },
        },
    });

    chart.legend({
        custom: true,
        items: [
            { name: 'vaccinated', value: 'vaccinated', marker: { symbol: 'line', style: { stroke: '#2c7d63', lineWidth: 2 } } },
        ],
    });

    chart.line().position('date*vaccinated').color('#2c7d63');
}

const getChartCasesAndDeath = (chart: Chart) => {
    chart.tooltip({
        shared: true,
        showMarkers: false,
    });

    chart.scale('dailyCases', {
        alias: 'dailyCases',
        nice: true,
    });

    chart.scale('dailyDeaths', {
        alias: 'dailyDeaths',
        nice: true,
    });

    chart.interaction('active-region');

    chart.line().position('date*dailyCases').color('#2c7d63');
    chart.line().position('date*dailyDeaths').color('#8b59c9');

    chart.legend({
        custom: true,
        items: [
            { name: 'dailyCases', value: 'dailyCases', marker: { symbol: 'line', style: { stroke: '#2c7d63', lineWidth: 2 } } },
            { name: 'dailyDeaths', value: 'dailyDeaths', marker: { symbol: 'line', style: { stroke: '#8b59c9', lineWidth: 2 } } },
        ],
    });

}