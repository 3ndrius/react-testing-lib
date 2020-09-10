import React from 'react'

export default function Click() {
    const [ valueClick, setValueClick ] = React.useState(0)
    return (
        <div className="click">
            <button>Up</button>
            <button>Down</button>
            <h2 data-testid="counter-value">{valueClick}</h2>
        </div>
    )
}
