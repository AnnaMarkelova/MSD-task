import { CommentOutlined } from '@ant-design/icons';
import { Avatar, Button, Image, Space } from 'antd';
import styles from '../../styles/ChartContainer.module.css'

const COUNT_COMMENTS = 3;
interface ChartContainerProps {
    title: string,
    ChartElement: JSX.Element
}

const ChartContainer = ({ title, ChartElement}: ChartContainerProps) => {

    return (
        <div className={styles.chartContainer}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.ChartElement}>
            {ChartElement}
            </div>
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