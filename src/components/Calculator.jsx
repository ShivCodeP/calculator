import React from "react";

const Calculator = () => {
    const history = React.useRef("Shivam testing");
    const [val,setVal] = React.useState("");

    React.useEffect(() => {
       history.current = val;
    },[val])
    
    const backspace = () => {
        try{
            setVal(val.slice(0,-1));
        } catch(err) {
            setVal("")
        }
    }

    const calculate = () => {
       try {
        setVal(eval(val))
       } catch (error) {
        setVal("Error")
       }
    }

    return <div>
        <div className="screen">
            <div className="previous">
                <p>{history.current}</p>
            </div>
            <div className="result">
                <input type="text" value={val} disabled/>
            </div>
        </div>
        <div className="keypad">
            <div className="row-1">
                <div className="key">C</div>
                <div className="key">del</div>
                <div className="key">%</div>
                <div className="key">/</div>
            </div>
            <div className="row-2">
                <div className="key">7</div>
                <div className="key">8</div>
                <div className="key">9</div>
                <div className="key">X</div>
            </div>
            <div className="row-3">
                <div className="key">4</div>
                <div className="key">5</div>
                <div className="key">6</div>
                <div className="key">-</div>
            </div>
            <div className="row-4">
                <div className="key">1</div>
                <div className="key">2</div>
                <div className="key">3</div>
                <div className="key">+</div>
            </div>
            <div className="row-5">
                <div className="key">NA</div>
                <div className="key">0</div>
                <div className="key">.</div>
                <div className="key">=</div>
            </div>
        </div>
    </div>
}

export default Calculator