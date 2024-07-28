import { useEffect, useState } from 'react';
import '../Components/progressBar.css';
export const ProgressBar = ({ value = 0 }) => {
    const [cur, setCur] = useState(value);
    useEffect(() => {
        setCur(Math.min(100, Math.max(value, 0)))
    }, [value]);
    return (
        <>
            <div className="progress-div">
                <div className='CLR' style={{width:`${cur}%`}} />
                <span className='P' style={{color: cur > 49 ? "white":"black"}}>{cur.toFixed()}</span>
            </div>
        </>
    );
}