import React from 'react'
interface Buttonprops{
  btnname:string;
  klass:string
}

const Button:React.FC <Buttonprops>= ({btnname,klass}) => {
  return (
    <>
        <button className={klass}>{btnname}</button>
    </>
  )
}

export default Button