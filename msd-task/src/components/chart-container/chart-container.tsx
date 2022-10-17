import { CommentOutlined } from '@ant-design/icons';
import { Avatar, Button, Image } from 'antd';
import { Chart } from '../../consts/chart';
import styles from '../../styles/ChartContainer.module.css'

const COUNT_COMMENTS = 3;
interface ChartContainerProps {
    chart: Chart,
}
const ChartContainer = ({ chart }: ChartContainerProps) => {

    return (
        <div className={styles.chartContainer}>
            <h2 className={styles.title}>
                {chart}
            </h2>
            <div>
            </div>
            <div className={styles.chartPanel}>
                <Avatar
                    src={
                        <Image
                            src="https://joeschmoe.io/api/v1/random"
                            style={{width: 32}}
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