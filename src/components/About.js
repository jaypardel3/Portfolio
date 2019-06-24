import React from 'react';
import '../App.scss';
import jay from '../jay.png';



const Home = () => {

    return (
            <main class='mainsubgrid' data-router-wrapper>
                <section class="about" data-router-view="about">
                    <img class='about__pic' src={jay} alt='jaypic'/>
                    <div class="about__content">
                        <h1 class="pink">Hi,</h1>
                        <div class="home__divider--about"></div>
                        <p >I am a self-taught full-stack web developer that focuses on delivering beautiful, efficient, responsive web apps. I have experience working with html, css, javascript, react for the front end and nodejs + expressjs, graphql and postgresql for the backend. I am always excited about the latest technologies, hence, I do enjoy learning them.</p>
                        <br></br>
                        <p>I was previously a physiotherapist working in a children’s hospital, and while the ability to help people while working there was real, the ability to serve even more people by creating useful stuff was even more enticing to me.</p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a class='btn btn--white btn--animated' href='http://www.google.com' target='_blank'>Download my resume.</a>
                    </div>
                    <div class='about__content--side'>
                            <div class='linked'>
                                <div class='linked__des'>LINKEDIN</div>
                                <div class='linked__link'>Jay Pardel Obate</div>
                            </div>
                            <div class='git'>
                                <div class='git__des'>GITHUB</div>
                                <a class='git__link' href='https://github.com/jaypardel3' target='_blank'>jaypardel3</a>
                            </div>
                    </div>
                </section>
            </main>
    )
}

export default Home;