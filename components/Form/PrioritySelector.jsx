import React from 'react'

function StatusSelector() {
    let options = ["Low", "Medium", "High"];
    return (
        <select id="priority" className="form-selector">
            {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
    )
}

export default StatusSelector