import React, { useEffect } from 'react';
import Style from './sass/style.module.scss';
import { Link } from "react-router-dom";
const Development = () => {
    useEffect(() => {
        document.title = 'Development'
    })

    return (
        <section className={Style.development}>
            <span className={Style.setting} >
                <h1> Page Under Development pls check back later </h1>
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path fill-rule="hsl(26, 100%, 55%)" d="M5.2 3.8A5 5 0 017 3.1V2a1 1 0 012 0v1.1a5 5 0 011.8.7l.7-.7A1 1 0 1113 4.5l-.7.7c.3.6.6 1.2.7 1.8h1a1 1 0 110 2h-1.1a5 5 0 01-.7 1.8l.7.7a1 1 0 11-1.4 1.4l-.7-.7a5 5 0 01-1.8.7V14a1 1 0 11-2 0v-1.1a5 5 0 01-1.8-.7l-.7.7A1 1 0 113 11.5l.7-.7A5 5 0 013.1 9H2a1 1 0 010-2h1.1a5 5 0 01.7-1.8L3 4.5A1 1 0 014.5 3l.7.7zM8 10a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
            </span>
            <Link to="/" className={Style.error404}>
                <button>Go back to homepage</button>
            </Link>
        </section>
    )


}
export default Development;