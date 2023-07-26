import React, { memo } from 'react'

function Fieldset({ legend, name, outerClass, children, ...rest }) {
    return (
        <div className={outerClass}>
            <fieldset name={name} {...rest} >
                <legend>{legend}</legend>
                {children}
            </fieldset>
        </div>
    )
}

export default memo(Fieldset)