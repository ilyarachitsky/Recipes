import React from 'react'
import * as data from '../data.json';

export default function Recipes() {
    console.log(data.default.imageURL);
    return (
        <div>
            {/* {data.default[0].ingredients.map(el => <p>{el.name}</p>)} */}
            {data.default.map(ele => ele.ingredients.map(e => <li>{e}</li>))}
        </div>
    )
}
