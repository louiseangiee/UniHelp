import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import { useCollection } from '../../hooks/useCollection';
import { projectFirestore } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';

function GetScore() {
    const { user } = useAuthContext();
    //const [error, setError] = useState(false)
    const [data, setData] = useState(null)
    //const {documents, error} = useCollection('results');
    //var englishTest = documents.where("admitYear", "==", 2021)
    //return documents

    const [isPendingData, setIsPendingData] = useState(false)
    console.log(user.uid)
    useEffect(() => {
        //setIsPendingData(true)
        const scores = projectFirestore.collection('results').onSnapshot((snapshot) => {
            let result = []
            //console.log(doc.data())
            if (snapshot.empty) {
                setError('Snapshot is empty')
                setIsPendingData(false)
            }
            else {
                snapshot.docs.forEach(doc => {
                    result.push({ id: doc.id, ...doc.data() })
                })
                console.log(result)
                setData(result)
                setIsPendingData(false)
                return result
            }
            //setError(error.message)
            //setIsPendingData(false)
            //console.log(result)
        })
        return () => scores
    })
    
}

export default GetScore