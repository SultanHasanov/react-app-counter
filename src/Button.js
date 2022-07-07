import React from 'react'

export default function Button(props) {
  return (
    <div className='button'>
        <button className='btn1' onClick={ () => {
            props.setCount((prev) => prev - 1)
            props.setCount2((prev) => prev - 1)
        }}>Отнять  -1</button>
    </div>
  )
}
