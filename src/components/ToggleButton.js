import React, { useState } from 'react';

export function ToggleButtonGroupControlled(props) {
  const [value, setValue] = useState([]);

  const handleChange = (val) => { 
    if(props.singleSelect) {
        if(value.find((item) => item === val)) {
            setValue([])
            props.onChange([])
        } else {
            setValue([val]);
            props.onChange([val])
        }
    } else {
        let temp;
        if(value.find((item) => item === val)) {
            temp = value.filter((item) => item !== val)
        } else {
            temp = value.concat([val]);
        }
        setValue(temp)
        props.onChange([val])
    }
    
  }

  return (
    <div>
        {props.label.map((lab) => {
            return (
                <button 
                onClick={() => handleChange(lab)} 
                className="select--label" 
                style={{backgroundColor: value.find((item) => item === lab) ? '#01A592' : '#00796B', color: value.find((item) => item === lab) ? "white" : "#D3D3D3"}}>
                    <p>{lab}</p>
                </button>
            )
        })}
    </div>
  );
}