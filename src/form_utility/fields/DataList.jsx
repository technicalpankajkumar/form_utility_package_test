import React,{memo} from 'react'

function DataList({ label, type, name,options,onChange, outerClass, list_id, ...rest }) {

    return (
        <div className={outerClass}>
            {label ? <> <label htmlFor={name}>{`${label} :`}</label><br /></> : <></>}

            <input type={type} id={name} name={name} list={list_id} onChange={onChange} {...rest} />
            <datalist id={`${list_id}`}>
                {
                    options.map(({value,label, ...rest}, index)=> {
                        return <option value={`${value}`} key={index} {...rest}>{`${label}`}</option>
                    })
                }
            </datalist>
        </div>
    )
}

export default memo(DataList)

// types => {'range','color','text','number'}

// min=0 and max=100 attribute for input field in type of range.
// Recommended values in types text, search, url, tel, email and number,
// are displayed in a drop-down menu when user clicks or double-clicks on the control. 