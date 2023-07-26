import React, { memo } from 'react';
import './css/onecheck.css'

function OneCheck({ name, size, bgColor, className, ...rest }) {
    return (
        <input
            type="checkbox"
            name={name}
            id={name}
            className={
            className ||
            `form-utility-onecheck ${bgColor ? `bg-color-${bgColor}` : `bg-color-danger`}` }
        />)
}
export default memo(OneCheck)