import { AlignLeftOutlined, DownloadOutlined, FilterOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Space } from 'antd';
import styles from '../../styles/MainPanel.module.css'

const NOTES_COUNT = 3;
const FIlTER_COUNT = 9;

const iconStyle = { fontSize: '20px', color: '#3c6753' };
const MainPanel = () => {

    return (
        <div className={styles.mainPanel}>
            <h1 className={styles.title}>
                Page title
            </h1>
            <Space className={styles.buttonContainer} size={[8, 16]} wrap>
                <Button type='default' >
                    Export to PDF
                    <DownloadOutlined style={iconStyle} />
                </Button>
                <Button type='default'>
                    {`Notes (${NOTES_COUNT})`}
                    <AlignLeftOutlined style={iconStyle} />
                </Button>
                <Button type='default'>
                    <Space>
                        Filter
                        <Badge count={FIlTER_COUNT} overflowCount={8} style={{ backgroundColor: '#3c6753', }} />
                        <FilterOutlined style={iconStyle} />
                    </Space>

                </Button>
            </Space>
        </div>
    )
}

export default MainPanel;