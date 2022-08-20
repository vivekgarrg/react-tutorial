import React from 'react'

export default function ListsAndKeys() {
    const arr = [
        { name: "Vivek", id: "1" },//0
        { name: "Vivek", id: "2" },//1
        { name: "Vivek", id: "3" },//2
        { name: "Vivek", id: "4" },//3
    ];

    return (
        <div>
            <ul>
                {arr.map(val => <li key={val?.id}>{val?.name}</li>)}
            </ul>
        </div>
    )
}
