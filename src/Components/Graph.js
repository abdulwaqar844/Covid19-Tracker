import React,{useState,useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
export default function PieChart() {
    const [globalData, setglobalData] = useState({});
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
            let data = await response.json();
            setglobalData(data.results[0]);
        }
        getData()
    }, [])
    
const data = {
	labels: [
		'Total Active Cases',
		'Total Recovered',
		'Total Deaths'
	],
	datasets: [{
		data: [globalData.total_active_cases, globalData.total_recovered, globalData.total_deaths],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};
    return (
        <div>
          <h2>COVID CASES</h2>
          <Pie data={data} />
        </div>
      );}