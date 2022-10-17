import { CommentOutlined } from '@ant-design/icons';
import { Avatar, Button, Image } from 'antd';
import { ChartType } from '../../consts/chart';
import { getChartData } from '../../consts/chart-data';
import Chart from '../chart/chart';

import styles from '../../styles/ChartContainer.module.css'

const COUNT_COMMENTS = 3;
interface ChartContainerProps {
    chartType: ChartType,
}

const ChartContainer = ({ chartType }: ChartContainerProps) => {

    return (
        <div className={styles.chartContainer}>
            <h2 className={styles.title}>
                {getChartData().get(chartType).title}
            </h2>
            <Chart
                chartType={chartType}
            />
            <div className={styles.chartPanel}>
                <Avatar
                    src={
                        <Image
                            src="https://joeschmoe.io/api/v1/random"
                            style={{ width: 32 }}
                            alt='random avatar'
                        />}
                />
                <Button type='default'>
                    {COUNT_COMMENTS}
                    <CommentOutlined />
                </Button>
            </div>
        </div>
    )
}

export default ChartContainer;