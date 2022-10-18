import type { NextPage } from 'next'
import Head from 'next/head'
import ChartContainer from '../components/chart-container/chart-container'
import MainPanel from '../components/main-panel/main-panel'
import { ChartType } from '../consts/chart'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <p className={styles.title} >App title</p>
            </header>
            <main className={styles.main}>
                <MainPanel />
                <div className={styles.charts}> 
                    <ChartContainer
                        chartType={ChartType.ChartVaccinated} />
                    <ChartContainer
                        chartType={ChartType.ChartCumAdmissionsByAge} />
                </div>
            </main>
        </div>
    )
}

export default Home
