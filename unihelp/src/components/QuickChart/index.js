import React, { useEffect} from 'react';
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { AuthContext } from '../../context/AuthContext';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)


const QuickChart = () => {
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'transparent'
        }]
    };
    const options = {};


    return (
        <div style={{width: '500px', height: '500px'}}>
            <Line data={data} options={options}></Line>
        </div>
    )
}

export default QuickChart;