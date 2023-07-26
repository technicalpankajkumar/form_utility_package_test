import React, { memo } from 'react';
import './css/btn.css'

function Button({ type, label, btnSize, btnColor, disabled, className, ...rest }) {

    return (
        <>
            <button
                type={type}
                className={
                    className || `btn btn-${btnSize || 'full'} btn-${btnColor || 'dark'} ${disabled ? 'btn-disabled' : ''}`
                }
                disabled={disabled ? true : false}
                {...rest}>{label}
            </button>
        </>
    )
}
export default memo(Button)