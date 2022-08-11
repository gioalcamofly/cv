import React from "react";
import './Banner.css';

export function Banner() {

    var networks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/giovannicabreramoreno/', className: 'fa fa-linkedin'},
        { name: 'GitHub', url: 'https://github.com/gioalcamofly', className: 'fa fa-github' }
    ];


    return (
        <section id="home" className="banner">
            <div className='banner-text'>
                <h1>Giovanni Cabrera</h1>
                <h2>Backend developer from Las Palmas de Gran Canaria</h2>
                <p>Innovative | Machine Learning Student | Entrepreneur</p>
                <ul className='social-networks'>
                    {
                        networks.map((network) => (
                            <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}/></a></li>
                        ))
                    }
                </ul>
            </div>
        </section>            
    )
}

