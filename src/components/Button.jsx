import React from 'react'
import { useId } from 'react'
function Button({children, type = "button", bgco = "bg-green-200", ...props}) {
    const id = useId();
    return (
        <>
        <button className={`px-4 py-2 rounded-xl ${type} ${bgco} `}{...props} id={id}> </ button>
        </>
    )
}

export default Button
