import React from 'react'
import { trim } from '../utils/helpers'

const FoodList = ({ food, onSelect }) =>
  food.length === 0
    ? <p>Your search has 0 results.</p>
    : <ul className='food-list'>
      {food.map((item) => (
        <li onClick={() => onSelect(item)} key={item.label}>
          <h3>{trim(item.label)}</h3>
          <img src={item.image} alt={item.label} />
          <div>{Math.floor(item.calories)} Calories</div>
          <div>{item.source}</div>
        </li>
      ))}
    </ul>

export default FoodList