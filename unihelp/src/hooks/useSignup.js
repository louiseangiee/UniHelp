import { useState, useEffect } from 'react'
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, fullName, studentType, studentOrigin, HSQualification, englishTest, gradDate, DoB) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }

      // add account details to user
      // await res.user.updateProfile({ fullName, studentType, HSQualification, gradDate, DoB })

      // create a user document
      await projectFirestore.collection('accountDetails').doc(res.user.uid).set({
        fullName, 
        studentType,
        studentOrigin,
        HSQualification,
        englishTest,
        gradDate,
        DoB
      })

      await projectFirestore.collection('userProgress').doc(`progress${res.user.uid}`).set({
        'smu': {checklist: [{activity: '', deadline: '', done:false}]},
        'ntu': {checklist: [{activity: '', deadline: '', done:false}]},
        'nus': {checklist: [{activity: '', deadline: '', done:false}]},
      })


      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}