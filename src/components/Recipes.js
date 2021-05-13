import React from 'react'
import * as data from '../data.json';

export default function Recipes() {
    console.log(data);
    return (
        <div>
            {data.default[0].ingredients.map(el => <p>{el.name}</p>)}
        </div>
    )
}
