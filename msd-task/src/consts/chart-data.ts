import { ChartType } from "./chart";

const ChartData = new Map()
ChartData.set(ChartType.ChartVaccinated,
    {
        title: 'ChartVaccinated',
        url: 'https://api.coronavirus.data.gov.uk/v1/data?'
            + 'filters=areaType=nation;areaName=england&'
            + 'structure={"date":"date","vaccinated":"cumPeopleVaccinatedCompleteByVaccinationDate"}',
    });
ChartData.set(ChartType.ChartCasesAndDeath,
    {
        title: 'ChartCasesAndDeath',
        url: 'https://api.coronavirus.data.gov.uk/v1/data?'
            + 'filters=areaType=nation;areaName=england&'
            + 'structure={"date":"date","dailyCases":"newCasesByPublishDate","dailyDeaths":"newDeaths28DaysByPublishDate"}'
    });

export const getChartData = () => ChartData;