import React from "react";
import Navbar from "./navbar";
import Places from "./places";
import data from "./data";
import "./index.css"

export default function App(){
  const dataElement = data.map(item => {
    return <Places
    
      key={item.id}
      {...item}
    />
  })
  return(
    <div>
      <Navbar/>
      {dataElement}
    </div>
  )
}