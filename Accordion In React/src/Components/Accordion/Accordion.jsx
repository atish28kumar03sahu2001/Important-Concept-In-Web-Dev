import { useState } from 'react';
import '../Accordion/Accordion.css';
import { Data } from './Data';
import { MyAccordion } from './MyAccordion';
export const Accordion = () => {
    const [list, setList] = useState(Data);
    return (
        <>
            <h1>Accordion In React JS</h1>
            <section className='main-div'>               
            {
                    list.map((curele)=>{
                        const {id} = curele
                        return <MyAccordion key={id} {...curele} />
                    })
                }
            </section>
        </>
    );
}