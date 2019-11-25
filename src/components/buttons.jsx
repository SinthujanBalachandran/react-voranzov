import React from 'react';

const buttons = ({onIncrement,onDecrement,onReset}) => {
    return (<div>
        <input type="button" value="Increment" onClick={onIncrement} className="btn btn-primary m-2"></input>
        <input type="button" value="Decrement" onClick={onDecrement} className="btn btn-secondary m-2"></input>
        <input type="button" value="Reset" onClick={onReset} className="btn btn-danger m-2"></input></div>
    );
}
export default buttons;