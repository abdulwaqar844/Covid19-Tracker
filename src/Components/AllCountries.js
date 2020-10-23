import React,{useState,useEffect} from 'react';


export default function AllCountries() {
    const [globalData, setglobalData] = useState([{}]);
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
            let data = await response.json();
            setglobalData(Object.values(data.countryitems[0]));
            console.log(data.countryitems[0])

        }
        getData()
    }, [])


    return (
        <div>
            <table>
            {Object.keys(globalData[0]).map((key, ind) => {
                return(
                    <tr> 
                        <td></td>
                        <td key={ind}>{key.replace(/_/g, " ")}</td>
                        <td>{globalData[1][key]}</td>
                    </tr>
                )}

    )}   
 </table>
</div>

    );}
