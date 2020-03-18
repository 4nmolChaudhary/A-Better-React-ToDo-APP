import React from 'react'

export default function Button() {

    const eventHandler = () => {
        console.log('click occured ....')
    }
    return (
        <div>
            <button onClick={eventHandler}>Click</button>
        </div>
    );
}
