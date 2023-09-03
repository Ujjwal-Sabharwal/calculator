import React from 'react'

export const Button = (props) => {
  const classname=`btn btn-${props.classname}`
  const clicked=()=>{
    props.fn(props.value)
  }
  return (
    <button onClick={clicked} type="button" class={classname} style={{width:50}}>{props.value}</button>
  )
}
