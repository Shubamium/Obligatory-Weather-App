import React, { useState } from 'react'

export default function Switch({options, onChanged, defaults}) {
  const [selected, setSelected] = useState(options[defaults] || null);

  return (
    <div className='switch'>
        {options && options.map((opt)=>{
            return (
                <button 
                onClick={()=>{
                    setSelected(opt);
                    if(onChanged){
                        onChanged(opt);
                    }
                }}
                className={`${opt === selected ? 'active' : ''}`}>{opt}</button>
            )
        })}
    </div>
  )
}
