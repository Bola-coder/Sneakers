import React, { useEffect } from 'react';
import Style from './sass/style.module.scss';
import shirt from './img/shirt.png'
import { Link } from "react-router-dom";
const Development = () => {
    useEffect(() => {
        document.title = 'Development'
    })

    return (
        <>
           <h1></h1>
        </>
    )


}
export default Development;