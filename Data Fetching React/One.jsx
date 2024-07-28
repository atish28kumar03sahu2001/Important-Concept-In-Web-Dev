import { useState, useEffect } from "react";

export const One = () => {
    const [data, setData] = useState([]);
    const func = async () => {
        try {
            let response = await fetch('https://dummyjson.com/todos');
            let data = await response.json();
            setData(data.todos);
        } catch (error) {
            alert(`${error}`);
        }
    }
    useEffect(()=>{
        func();
    },[])
    return(
        <>
            <div style={{border:"2px solid black"}}>
                {
                    data.map((list)=>(
                        <div key={list.id}>
                            <p>{list.todo}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}