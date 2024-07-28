import { useState ,useEffect } from "react";
import axios from "axios";
export const Two = () => {
    const [data, setData] = useState([]);
    const Func1 = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/todos');
            setData(res.data.todos);
        } catch(error) {
            alert(`${error}`);
        }
    }
    useEffect(()=>{
        Func1();
    },[])
    return (
        <>
            <div style={{border:"2px solid black"}}>
                {
                    data.map(list =>(
                        <div key={list.id}>
                            <p>{list.todo}</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}