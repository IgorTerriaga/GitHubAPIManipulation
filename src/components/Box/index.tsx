import React from 'react';

import "./styles.css"

interface BoxProps {
  title: string;
  description: string;
  icon: JSX.Element | JSX.Element[];
  value: string;
  set: (value: string) => void;
}

function Box({ title, description, icon, value, set }: BoxProps) {

  return (
    <div className="BoxRoot">
      <div className="BoxHeader">
        <h3 className="BoxTitle" >{title}</h3>
        {icon}
      </div>
      <input className="input" type="text" placeholder={description} value={value} onChange={({target})=> set(target.value)} />
    </div>
  )

}

export default Box;