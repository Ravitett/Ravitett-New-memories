import { useState,useEffect } from "react";

const Table = ({keys,data,trClick}) => {

    const [dataState, setData] = useState(data);

    useEffect(() => {
        setData(data);
    }, [data])

    let sorted = [...data];
    const sortTable = () => { 
        // sorted.sort((a,b) => {
        //     return a.a - b.a;
        // });
        // setData(sorted);
    }

    return (
        <table className="table">
            <thead>
                <tr onClick={sortTable}>
                    {keys.map(key => <th>{key.title}</th>)}
                </tr>
            </thead>
            <tbody>
                {dataState.map(row => <tr onClick={()=>{trClick(row)}}>{keys.map(key => <td>{row[key.key]}</td>)}</tr>)}
            </tbody>
        </table>
    )
}

export default Table;
