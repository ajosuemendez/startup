import React, { useEffect, useState } from 'react';
import Switch from "react-switch";

export function CleistSwitch(props) {
  const [checked, setChecked] = useState(false)
  
  function handleChange(c) {
    setChecked(c);
    props.onChange(c)
  }

    return (
      <label>
        <Switch 
        id="switch"
        checkedIcon={false} 
        uncheckedIcon={false} 
        onColor={'#233A44'}
        offColor={'#233A44'}
        onHandleColor={"#01A592"} 
        offHandleColor={"#00796B"} 
        onChange={handleChange} 
        checked={checked} 
        height={25}
        width={46}
        />
      </label>
    );
}