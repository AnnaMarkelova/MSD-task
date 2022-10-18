import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';
import { ChartType } from '../../consts/chart';
import useFetchCoronavirusData from '../../hooks/useFetchCoronavirusData';
import Loader from '../loader/loader';
import NoData from '../no-data/no-data';

export default function ChartVaccinated() {

    const { data, error } = useFetchCoronavirusData(ChartType.ChartVaccinated);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref || !data || ref.current == null) return;

        const chart = new Chart({
            container: ref.current,
            autoFit: true,
            height: 500,
        });

        const dataLast30days = data.data.slice(0,60);
        chart.data(dataLast30days);

        chart.tooltip({
            shared: true,
            showMarkers: false,
        });
    
        chart.scale('newPeopleVaccinatedFirstDose', {
            alias: 'people vaccinated first dose',
            nice: true,
        });
    
        chart.scale('newPeopleVaccinatedSecondDose', {
            alias: 'people vaccinated second dose',
            nice: true,
        });
    
        chart.interaction('active-region');
    
        chart.line().position('date*newPeopleVaccinatedFirstDose').color('#2c7d63');
        chart.line().position('date*newPeopleVaccinatedSecondDose').color('#8b59c9');
    
        chart.legend({
            custom: true,
            items: [
                { name: 'people vaccinated first dose', value: 'newPeopleVaccinatedFirstDose', marker: { symbol: 'line', style: { stroke: '#2c7d63', lineWidth: 2 } } },
                { name: 'people vaccinated second dose', value: 'newPeopleVaccinatedSecondDose', marker: { symbol: 'line', style: { stroke: '#8b59c9', lineWidth: 2 } } },
            ],
        });

        chart.render();

        return () => chart.destroy();
    }, [data, ref])

    if (error) return <NoData />;
    if (!data) return <Loader />;

    return (
        <div>
            <div ref={ref} />
        </div>
    );
}
