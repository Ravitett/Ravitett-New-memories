import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMemoryForApprove } from '../Api/fetch'
import Modal from '../Components/Modal'
import Table from '../Components/Table'

const Admin = () => {



    const keys = [
        {key:"date",title:"תאריך"},
        {key:"userName",title:"שם משתמש"},
        {key:"title",title:"זיכרון"}
       ];

    const [data, setData] = useState([]);

    useEffect(async() => {
        let dataFromApi = await getAllMemoryForApprove();
        setData(dataFromApi);
    }, [])

    const trOnClick = (_row) => {
        console.log(_row);
        
    }

    return (
        <div className='container'>
            <Table keys={keys} data={data} trClick={trOnClick}/> 
            <Modal title="a" content="b" />
        </div>
    )
}

export default Admin
