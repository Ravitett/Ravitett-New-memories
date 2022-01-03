import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMemoriesByUserId } from '../Api/fetch'
import Modal from '../Components/Modal'
import Table from '../Components/Table'

const User = () => {
    const keys = [
        {key:"date",title:"תאריך"},
        {key:"title",title:"זיכרון"}
       ];

    const [data, setData] = useState([]);

    useEffect(async() => {
        let dataFromApi = await getAllMemoriesByUserId();
        setData(dataFromApi);
    }, [])

    const trOnClick = (_row) => {
        console.log(_row);
        
    }
   
    return (
        <div className='container'>
            <Table keys={keys} data={data} trClick={trOnClick}/> 
        </div>
    )
}

export default User
