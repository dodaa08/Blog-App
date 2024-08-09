import React from 'react'
import { useId } from 'react'
function Input({label, type = "text", classname = "", ...props},ref) {
    const id = useId();
    return (
        <>
        <div>
        {label &&
         <label className=''>
             {label}
        </label>
        }
        
        <input type={type} className={`${classname}`} id={id} ref={ref} {...props} />
        </div>
    
        </>
    )
}

export default Input
