import { ChartType } from "./chart";

const ChartData = new Map()
ChartData.set(ChartType.ChartVaccinated,
    {
        title: 'New people vaccinated 1nd and 2nd dose in the last 30 days',
        url: 'https://api.coronavirus.data.gov.uk/v1/data?'
            + 'filters=areaType=nation;areaName=england&'
            + 'structure={"date":"date","newPeopleVaccinatedFirstDose":"newPeopleVaccinatedFirstDoseByPublishDate","newPeopleVaccinatedSecondDose":"newPeopleVaccinatedSecondDoseByPublishDate"}'
    });
ChartData.set(ChartType.ChartCumAdmissionsByAge,
    {
        title: 'Total number of patients admitted to hospital with COVID-19 since the start of the pandemic, by age',
        url: 'https://api.coronavirus.data.gov.uk/v1/data?'
            + 'filters=areaType=nation&areaCode=E92000001&'
            + 'structure={"date":"date","cumAdmissionsByAge":"cumAdmissionsByAge"}'
    });

export const getChartData = () => ChartData;


