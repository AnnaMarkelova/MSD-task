import { Chart } from '@antv/g2';
import { useCallback } from 'react';
import useFetchCoronavirusData from '../../hooks/useFetchCoronavirusData';
import ChartComponent from '../chart-component/chart-component';

export default function ChartVaccinated() {

    const url = 'https://api.coronavirus.data.gov.uk/v1/data?'
    + 'filters=areaType=nation;areaName=england&'
    + 'structure={"date":"date","newPeopleVaccinatedFirstDose":"newPeopleVaccinatedFirstDoseByPublishDate","newPeopleVaccinatedSecondDose":"newPeopleVaccinatedSecondDoseByPublishDate"}';
    
    const { data: rawData, error } = useFetchCoronavirusData(url);

    const data = rawData?.data.slice(0, 60);
    
    const setChart = useCallback((chart: Chart) => {
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
    }, []);

    return (
        <ChartComponent
        data={data}
        error={error}
        setChart={setChart}
        />
    );
}
