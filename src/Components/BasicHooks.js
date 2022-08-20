import React, { useState, useEffect, useRef } from 'react'

export default function BasicHooks() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const inputRef = useRef();
    // useEffect(() => {
    //     console.log('UseEffect Called')
    // }, [])//ComponentDidMount

    // useEffect(() => {
    //     console.log('UseEffect Called')
    // }, [name])//ComponentDidUpdate

    const handleChange = (e) => {
        if (e.target.value === "vivek") {
            setName("Welcome Vivek")
        } else {
            setName(e.target.value)
        }
    }

    const handlSubmit = () => {
        console.log(inputRef.current.value)
    }

    return (
        <div>
            <h1>{count}</h1>
            <h2>{name}</h2>
            <button onClick={() => setCount(count + 1)}>+ Plus</button>
            <button onClick={() => setCount(count - 1)}>- Minus</button>

            {/* Controlled Input */}
            <input value={name} onChange={handleChange} />

            {/* Uncontrolled input */}
            <input ref={inputRef} />
            <button onClick={handlSubmit}>Submit</button>
        </div>
    )
}
