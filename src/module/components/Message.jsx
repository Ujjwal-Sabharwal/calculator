import React from 'react'

export const Message = (props) => {
  const classname=`alert alert-${props.class}`
  return (
    <div class={classname}>{props.value} {props.calval}</div>
  )
}
