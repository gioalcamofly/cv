import React from 'react';
import './Footer.css';

export function Footer() {


    return (
        <footer>
            <ul className="credits">
                <li>Giovanni Cabrera Moreno</li>
                <li>Photo by <a title="Van Mendoza" href="https://unsplash.com/es/fotos/r7YZXv5f5cc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" target="_blank" rel="noreferrer">Van Mendoza</a></li>
            </ul>
            <div id="to-top"><a className="scroll" title="Back to top" target="_blank" href="#"><i className='icon-up-name'/></a></div>
        </footer>
    )
}