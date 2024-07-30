import { useState, useRef, useEffect } from 'react';
import '../components/Stepper.css';

export const Steeper =({steps = []}) => {
    const [cur, setCur] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    const stepRefs = useRef([]);
    const [margins, setMargins] = useState({ marginLeft: 0, marginRight: 0 });

    if (!steps.length) {
        return <></>;
    }

    useEffect(() => {
        setMargins({
            marginLeft: stepRefs.current[0]?.offsetWidth / 2 || 0,
            marginRight: stepRefs.current[steps.length - 1]?.offsetWidth / 2 || 0,
        });
    }, [steps.length]);

    const handleStep = () => {
        setCur(prev => {
            if (prev === steps.length) {
                setIsComplete(true);
                return prev;
            } else {
                return prev + 1;
            }
        });
    };

    const calculateProgress = () => {
        return ((cur - 1) / (steps.length - 1)) * 100;
    };

    const ActiveComponent = steps[cur - 1]?.Component;

    return (
        <>
            <div className="Stepper">
                {steps.map((step, index) => (
                    <div
                        key={step.name}
                        ref={el => (stepRefs.current[index] = el)}
                        className={`Step ${cur > index + 1 || isComplete ? "Complete" : ""} ${cur === index + 1 ? "active" : ""}`}
                    >
                        <div className="Stepnumber">{cur > index + 1 || isComplete ? '✓' : (index + 1)}</div>
                        <div className="Stepname">{step.name}</div>
                    </div>
                ))}
                <div
                    className="progress"
                    style={{
                        width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
                        marginLeft: margins.marginLeft,
                        marginRight: margins.marginRight,
                    }}
                >
                    <div className="prg" style={{ width: `${calculateProgress()}%` }}></div>
                </div>
            </div>
            {ActiveComponent && <ActiveComponent />}
            {!isComplete && (
                <button onClick={handleStep}>{cur === steps.length ? "Finish" : "Next"}</button>
            )}
        </>
    );
};