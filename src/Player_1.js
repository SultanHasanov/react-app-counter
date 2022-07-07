import React from 'react'

export default function Player_1(props) {
  return (
    <div className='player_1'>
        <p>Зигмунд</p>
        <div> {props.count}
          </div>
        <button onClick={() => {
            props.setCount((prev) => prev + 1)
        }}>+</button>
    </div>
  )
}
