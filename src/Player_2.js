import React from 'react'

export default function Player_2(props) {
  return (
    <div className='player_2'>
        <p>Иван</p>
        <div>{props.count2}</div>
        <button onClick={() => {props.setCount2 ((prev) => prev + 1)
        }}>+</button>
    </div>
  )
}
