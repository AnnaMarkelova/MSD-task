import { AlignLeftOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import styles from '../../styles/MainPanel.module.css'

const MainPanel = () => {

    return (
        <div className={styles.mainPanel}>
            <h1 className={styles.title}>
                Page title
            </h1>
            <Space className={styles.buttonContainer} size={[8, 16]} wrap>
                <Button type='default' icon={<DownloadOutlined />}>Export</Button>
                <Button type='default'>
                    Notes
                    <AlignLeftOutlined />
                </Button>
                <Button type='default'>
                    Filter
                    <FilterOutlined />
                </Button>
            </Space>
        </div>
    )
}

export default MainPanel;