import { useState } from "react";

export const MyAccordion = ({question, answer}) => {
    const [show, setshow] = useState(false);
    return (
        <>
            <div className="main-heading">
                <p onClick={()=>setshow(!show)}>{show ? "-" : "+"}</p>
                <h3>{question}</h3>
            </div>
            {show && <p className="answers">{answer}</p>}
        </>
    );
}