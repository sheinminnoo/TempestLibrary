import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useTheme from '../hook/useTheme';
import {db} from '../firebase'
import { doc,getDoc, onSnapshot } from 'firebase/firestore';
import { useState } from 'react';
import Book from '../assets/book.png';


export default function BookDetail() {
    let {id} = useParams()
    let { isDark } = useTheme()
    // book 

    let [error,setError] = useState('')
    let [loading,setLoading] = useState(false)
    let [book,setBook] = useState(null)

    useEffect(()=>{
        setLoading(true)
        let ref = doc(db,'books',id)
        onSnapshot(ref,b=>{
            if(b.exists){
                let book = {id:b.id,...b.data()}
                setBook(book)
                setLoading(false)
                setError(false)
            }else{
                setError("Books not exist!")
                setLoading(false)
            }
        })
    },[id])

    return (
        <>
            {error && <p>{error}</p>}
            {loading && <p>loading ....</p>}
            {book && (
                <div className={`grid grid-cols-2 h-screen ${isDark ? 'text-white' : ''}`}>
                    <div>
                        <img src={Book} alt="" className='w-[80%]' />
                    </div>
                    <div className='space-y-4'>
                        <h1 className='text-3xl font-bold'>{book.title}</h1>
                        <div className='space-x-3'>
                            {book.categories.map(cateogry => (
                                <span className='bg-blue-500 text-white rounded-full text-sm px-2 py-1' key={cateogry}>{cateogry}</span>
                            ))}
                        </div>
                        <p>
                            {book.description}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}