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

function QuickChart(uni, qualification, HSorEnglish) {
    const [data, setData] = useState(null)
    const { documents, error } = useCollection('results');
    const [uniName, setUniName] = useState(null);

    useEffect(() => {
        if (uni.uni === 'nus') {
            setUniName('National University of Singapore')
        }
        if (uni.uni === 'ntu') {
            setUniName('Nanyang Technological University')
        }
        if (uni.uni === 'smu') {
            setUniName('Singapore Management University')
        }

        var HSResults = [
            { year: "2018", score: [], avg: 0 }, { year: "2019", score: [], avg: 0 }, { year: "2020", score: [], avg: 0 }, { year: "2021", score: [], avg: 0 }, { year: "2022", score: [], avg: 0 }
        ];


        if (documents) {
            function filterFromUni(doc) {
                return (doc.university === uniName && doc.status === "Admitted")
            }
            const filteredFromUni = documents.filter(filterFromUni)

            function filterFromQualification(doc2) {
                if (HSorEnglish === 'HS') {
                    return (doc2.qualification === qualification)
                }
                else if (HSorEnglish === 'English') {
                    return (doc2.englishTest === qualification)
                }
            }
            const filteredData = documents.filter(filterFromQualification)
            console.log(filteredData);




            filteredData.forEach(ele => {
                //console.log(ele.admitYear)
                if (ele.admitYear >= 2018 && ele.admitYear <= 2022) {
                    HSResults.forEach(res => {
                        if (res.year === ele.admitYear) {
                            if (HSorEnglish === 'HS') {
                                res.score.push(ele.grade)
                            }
                            if (HSorEnglish === 'English') {
                                res.score.push(ele.englishGrade)
                            }
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
        }
    }, [documents])

    return (
        <div style={{ width: '500px', height: '500px' }}>
            {data && <Line data={data}></Line>}
        </div>
    )

}

export default QuickChart