import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'

export default function useSignup() {
    let [error,setError] = useState(null)
    let [loading,setLoading] = useState(false)
    
    const signUp = async(email,password) =>{

        try{
            setLoading(true)
            let res  = await createUserWithEmailAndPassword(auth,email,password)
            setLoading(false)
            setError('')
            return res.user
        }catch(e){
            setError(e.message)
            setLoading(false)
        }
    }
    return {error,loading,signUp}
}
