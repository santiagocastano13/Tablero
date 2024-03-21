import React from 'react'
import { useState, useEffect, useContext } from "react";
import './Tasks.css'




export const Tasks = ({ children }) => {


  return (

    <>
    <div id='taskContainer'>
        <ul>
           {children}
        </ul>
    </div>

    </>

    )
}

