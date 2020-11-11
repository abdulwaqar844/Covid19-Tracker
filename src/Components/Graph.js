import React,{useState,useEffect} from 'react';
import {Pie} from 'react-chartjs-2';
export default function PieChart() {
    const [globalData, setglobalData] = useState({});
    useEffect(() => {
        async function getData() {
			const response = await fetch("https://api.covid19api.com/summary")
			let data = await response.json();
			let Global =data.Global;
			console.log(data)
			setglobalData(Global)
			//setglobalData(Object.values(Object.values(data)));
            console.log(Global.NewConfirmed)
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
		data: [globalData.TotalConfirmed, globalData.TotalRecovered, globalData.TotalDeaths],
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