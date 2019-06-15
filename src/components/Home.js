import React from 'react';
import '../App.scss';
import untitled from '../Untitled-1.png';
import whole from '../whole.png'



const Home = () => {

    return (
            <main class='mainsubgrid' data-router-wrapper>
                <section class="home" data-router-view="home">
                    <img class='home__bg' src={untitled} alt='background' />
                    <img class='home__pic' src={whole} alt='pic' />
                    <div class="home__content">
                        <h3 class="heading--3">hi, i am</h3>
                        <div class="home__divider"></div>
                        <h1 class="heading--1">Jay Pardel</h1>
                        <h3 class="heading--3">Full Stack Web Developer</h3>
                    </div>
                </section>
            </main>
    )
}

export default Home;

