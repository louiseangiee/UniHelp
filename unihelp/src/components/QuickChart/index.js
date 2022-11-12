import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useCollection } from '../../hooks/useCollection';
import { projectFirestore } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

/* function GetScore() {
    const { user } = useAuthContext();
    //const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    const {documents, error} = useCollection('results');
    //var englishTest = documents.where("admitYear", "==", 2021)
    return documents

    //const [isPendingData, setIsPendingData] = useState(false)
    /* console.log(user.uid)
    useEffect(() => {
        //setIsPendingData(true)
        const scores = projectFirestore.collection('results').onSnapshot((snapshot) => {
            let result = []
            //console.log(doc.data())
            if (snapshot.empty) {
                //setError('Snapshot is empty')
                //setIsPendingData(false)
            }
            else {
                snapshot.docs.forEach(doc => {
                    result.push({ id: doc.id, ...doc.data() })
                })
                console.log(result)
                //setData(result)
                //setIsPendingData(false)
                return result
            }
            //setError(error.message)
            //setIsPendingData(false)
            //console.log(result)
        })
        return () => scores
    })
    
}
*/

function QuickChart() {
    const [data, setData] = useState(null)
    const { documents, error } = useCollection('results');

    useEffect(() => {
        var HSResults = [
            { year: "2018", score: [], avg: 0 }, { year: "2019", score: [], avg: 0 }, { year: "2020", score: [], avg: 0 }, { year: "2021", score: [], avg: 0 }, { year: "2022", score: [], avg: 0 }
        ];

        if (documents) {
            function dataFilter(doc) {
                return (doc.university === 'National University of Singapore' && doc.qualification === "Cambridge A Level" && doc.status === "Admitted")
            }
            const filteredData = documents.filter(dataFilter)
            console.log(filteredData);

            
            
        
            filteredData.forEach(ele => {
                //console.log(ele.admitYear)
                if (ele.admitYear >= 2018 && ele.admitYear <= 2022) {
                    HSResults.forEach(res => {
                        if (res.year === ele.admitYear) {
                            res.score.push(ele.grade)
                        }
                    })
                }
            });

            HSResults.forEach(ele => {
                var total = 0;
                var count = 0;
                ele.score.forEach(scr => {
                    total += parseFloat(scr);
                    count += 1;
                })
                ele.avg = total / count;
            })
            console.log(HSResults)
        
            
            var chartdata = {
                labels: [],
                datasets: [{
                    label: 'Average Score',
                    data: [],
                    backgroundColor: 'transparent',
                }]
            }

            HSResults.forEach(res => {
                chartdata.labels.push(res.year)
                chartdata.datasets.forEach(dt => {
                    dt.data.push(res.avg)
                })
            })

            console.log(chartdata)
            setData(chartdata)

            
        

        //setIsPendingData(false)
    }}, [documents])
    
    return (
         <div style={{ width: '500px', height: '500px' }}>
            {data && <Line data={data}></Line>}
        </div>
    )

}

export default QuickChart