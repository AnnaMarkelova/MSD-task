import { CommentOutlined } from '@ant-design/icons';
import { Avatar, Button, Image, Space } from 'antd';
import { ChartType } from '../../consts/chart';
import { getChartData } from '../../consts/chart-data';

import styles from '../../styles/ChartContainer.module.css'
import ChartCumAdmissionsByAge from '../chart-cum-admissions-by-age/chart-cum-admissions-by-age';
import ChartVaccinated from '../chart-vaccinated/chart-vaccinated';

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
            {(chartType === ChartType.ChartVaccinated) && <ChartVaccinated/>}
            {(chartType === ChartType.ChartCumAdmissionsByAge) && <ChartCumAdmissionsByAge/>}
            <div className={styles.chartPanel}>
                <Avatar
                    src={
                        <Image
                            src="https://joeschmoe.io/api/v1/random"
                            style={{ width: 32 }}
                            alt='random avatar'
                        />}
                />
                <Button type='link'style={ { color: 'gray' }}>
                    <Space>
                    {COUNT_COMMENTS}
                    <CommentOutlined style={ { fontSize: '20px', color: 'gray' }}/>
                    </Space>
                </Button>
            </div>
        </div>
    )
}

export default ChartContainer;