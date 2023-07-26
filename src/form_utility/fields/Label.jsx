import React, { memo } from 'react'

function Label({label,id,...rest}) {
  return (
      <label htmlFor={id} {...rest}>{label}</label>
  )
}

export default memo(Label)
