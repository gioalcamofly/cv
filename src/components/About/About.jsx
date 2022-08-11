import React from 'react';
import { Grid } from '@mui/material';
import './About.css';


export function About() {

    return (
        <section id="about">
            <Grid container justifyContent="center" alignItems="center" spacing={1}>
                <Grid item sx={{textAlign: 'center'}} xs={3}>
                    <div className="image-container">
                        <img className="profile-pic" src={process.env.PUBLIC_URL + "/images/cv.jpg"} alt="Profile pic" />
                    </div>
                </Grid>
                <Grid item className="title" xs={9}>
                    <h2>About me:</h2>
                </Grid>
                <Grid item sx={{ textAlign: 'center' }} xs={3}>
                    <ul id="technologies">
                        <li><strong>Python</strong></li>
                        <li><strong>PHP</strong></li>
                        <li><strong>Laravel</strong></li>
                        <li><strong>SQL</strong></li>
                    </ul>
                </Grid> 
                <Grid item className="text" xs={9}>
                    <p>I am developer with 4 years of experience mainly in backend development but also in frontend, DevOps
                        and a little bit of application development. I'm in love with technology and I always try to learn
                        something new. I'm looking for a place where I can keep growing and where I could hace the 
                        chance to lead a team or teach younger people at the proper time.
                    </p>
                    <p>
                        These are some of the things I feel more proud of:
                    </p>
                    <ul>
                        <li>
                            I am working for one of the most innovative companies in Spain and succesfully managing several
                            projects.
                        </li>
                        <li>
                            I can easily adapt to new projects, tasks or technologies.
                        </li>
                        <li>
                            I am helping a junior developer during his first experience and he is happy with he has been learning.
                        </li>
                        <li>
                            I created a technology, the Light Painter, which led me to win a local award for most disruptive
                            technology at a business accelerator (Santander Explorer Gran Canaria).
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </section>
    )
}