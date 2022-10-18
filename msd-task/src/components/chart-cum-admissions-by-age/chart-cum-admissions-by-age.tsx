import { Chart } from '@antv/g2';
import { useCallback } from 'react';
import { ageRating } from '../../consts/age-rating';
import useFetchCoronavirusData from '../../hooks/useFetchCoronavirusData';
import ChartComponent from '../chart-component/chart-component';

type cumAdmissionsByAgeType = {
    age: string,
    rate: number,
    value: number,
    percentage: number
}

const getDataSortedByAge = (data: cumAdmissionsByAgeType[]) => {
    return data.sort((itemA, itemB) => ageRating.get(itemA.age) - ageRating.get(itemB.age));
}

const addPercentageToData = (data: cumAdmissionsByAgeType[]) => {
    const sumPopulation = data.
        reduce((prevItem: number, curItem: cumAdmissionsByAgeType) => prevItem + curItem.value, 0);
    return data.map((item) => ({...item, percentage: Math.floor(item.value * 100 / sumPopulation)}))
}
export default function ChartCumAdmissionsByAge() {

    const url = 'https://api.coronavirus.data.gov.uk/v1/data?'
        + 'filters=areaType=nation&areaCode=E92000001&'
        + 'structure={"date":"date","cumAdmissionsByAge":"cumAdmissionsByAge"}'

    const { data: rawData, error } = useFetchCoronavirusData(url);
    let data = null;
    if (rawData != null) {
        const cumAdmissionsByAgeLast = rawData?.data[0].cumAdmissionsByAge;
        const sortedData = getDataSortedByAge(cumAdmissionsByAgeLast);
        data = addPercentageToData(sortedData)
    }

    const setChart = useCallback((chart: Chart) => {

        chart.scale('percentage', {
            formatter: (percentage) => {
                const valTransform = percentage + '%';
                return valTransform;
            },
        });

        chart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.6,
        });

        chart
            .interval()
            .adjust('stack')
            .position('value')
            .color('age')
            .label('value', (value) => {
                return {
                    content: (data) => {
                        return `${data.age}: ${value}`;
                    },
                };
            })
            .tooltip('age*percentage');

        chart.interaction('element-active');
        chart.theme({ "styleSheet": { "brandColor": "#9DF5CA", "paletteQualitative10": ["#9DF5CA", "#61DDAA", "#42C090", "#19A576", "#008A5D", "#006F45", "#00562F", "#003E19", "#002800"], "paletteQualitative20": ["#9DF5CA", "#61DDAA", "#42C090", "#19A576", "#008A5D", "#006F45", "#00562F", "#003E19", "#002800"] } });

    }, []);

    return (
        <ChartComponent
            data={data}
            error={error}
            setChart={setChart}
        />
    );
}
