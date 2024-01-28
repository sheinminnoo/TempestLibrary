import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'

export default function useFirestore(collName) {

    let [ error ,setError ] = useState('')
    let [ laoding ,setloading ] = useState(false)
    let [ data, setData] = useState([])

    const getCollection = () =>{
        useEffect(()=>{

            setloading(true)
            let ref = collection(db,collName)
            let q = query(ref,orderBy('date','desc'))
            onSnapshot(q,docs=>{
                if(docs.empty){
                    setError("DOCS ARE NOT FOUND!")
                    setloading(false)
                }else{
                    let collectionData = [];
                    docs.forEach(doc=>{
                        let document = { id : doc.id , ...doc.data()};
                        collectionData.push(document)
                        setData(collectionData)
                    })
                    setloading(false)
                    setError("")
                }
            })
        },[])
        return { error , laoding ,data}
    }
    const addCollection = () =>{
        useEffect(()=>{

        },[])
    }
    const deleteCollection = () =>{
        useEffect(()=>{

        },[])
    }
    const updateCollection = () =>{
        useEffect(()=>{

        },[])
    }
    return {getCollection,addCollection,deleteCollection,updateCollection}
}


