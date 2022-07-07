import React from 'react'

export default function Reset(props) {
  return (
    <div>
        <button className='btn2' onClick={ () => {
            props.setCount(5)
            props.setCount2(5)
        }}>Сбросить</button>
    </div>
  )
}
