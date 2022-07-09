import React from 'react'
import "./subfooter.css"
const SubFooter = (props) => {
  return (
    <div className='sub-footer'>
        <div className='icon'>
            <img src={props.icon} alt="" />
        </div>
        <div className='sub-info'>
            <h1>
                {props.title}
            </h1>
            <p>
                {props.text}
            </p>
        </div>
    </div>
  )
}

export default SubFooter