import React, { useEffect, useState } from "react";
import { useFirestore } from '../hooks/useFirestore';
import { useAuthContext } from '../hooks/useAuthContext'


const QuickChart = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [results, setScores] = useState([]);
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()

    const url = "https://quickchart.io/chart";

    const retrieveScore = () => {
        const response = db.collection('results');
        const data = response.get();
        data.docs.forEach(item => {
            setScores([...results, item.data()])
        })
    }

useEffect(() => {
    retrieveScore();
}, [])



axios.get(url, {
    params: {

    }
})
    .then(response => {
        console.log(response.data)
        var data1 = response.data
    })
    .catch(err => {
        console.log(err.message)
    })


}

export default QuickChart;