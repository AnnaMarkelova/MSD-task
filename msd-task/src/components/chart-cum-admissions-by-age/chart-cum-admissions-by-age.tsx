import { Chart } from '@antv/g2';
import { useEffect, useRef } from 'react';
import { ChartType } from '../../consts/chart';
import useFetchCoronavirusData from '../../hooks/useFetchCoronavirusData';
import Loader from '../loader/loader';
import NoData from '../no-data/no-data';

type cumAdmissionsByAgeType =
    {
        age: string,
        rate: number,
        value: number,
        rating: number
    }

const ageRating = new Map();
ageRating.set('0_to_5', 1);
ageRating.set('6_to_17', 2);
ageRating.set('18_to_64', 3);
ageRating.set('65_to_84', 4);
ageRating.set('85+', 5);

const getDataSortedByAge = (data: cumAdmissionsByAgeType[]) => {
    const newData = data.map((item) => ({ ...item, 'rating': ageRating.get(item.age)}));
    return newData.sort((itemA, itemB) => itemA.rating - itemB.rating);
}
export default function ChartCumAdmissionsByAge() {

    const { data, error } = useFetchCoronavirusData(ChartType.ChartCumAdmissionsByAge);

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref || !data || ref.current == null) return;

        const chart = new Chart({
            container: ref.current,
            autoFit: true,
            height: 500,
        });


        const cumAdmissionsByAge = data.data[0].cumAdmissionsByAge;
        const sortedCumAdmissionsByAge = getDataSortedByAge(cumAdmissionsByAge);

        const sumPopulation = sortedCumAdmissionsByAge.
            reduce((prevItem: number, curItem: cumAdmissionsByAgeType) => prevItem + curItem.value, 0);
        chart.data(sortedCumAdmissionsByAge);

        chart.scale('value', {
            formatter: (val) => {
                const valTransform = Math.floor(val * 100 / sumPopulation) + '%';
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
                    content: (sortedCumAdmissionsByAge) => {
                        return `${sortedCumAdmissionsByAge.age}: ${value}`;
                    },
                };
            })
            .tooltip('age*value', (age, value) => {
                const percent = Math.floor(value * 100 / sumPopulation) + '%';
                return {
                    name: age,
                    value: percent,
                };
            });

        chart.interaction('element-active');
        chart.theme({ "styleSheet": { "brandColor": "#9DF5CA", "paletteQualitative10": ["#9DF5CA", "#61DDAA", "#42C090", "#19A576", "#008A5D", "#006F45", "#00562F", "#003E19", "#002800"], "paletteQualitative20": ["#9DF5CA", "#61DDAA", "#42C090", "#19A576", "#008A5D", "#006F45", "#00562F", "#003E19", "#002800"] } });

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
