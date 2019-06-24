import React from "react";
import '../App.scss';
import contact from '../contact2.png';
import untitled from '../Untitled-1.png';


const Contact = () => {
    return (
        <main class='mainsubgrid' data-router-wrapper>
            <section class="contact" data-router-view="about">
                <div class="contact__right">
                    <div class="contact__maintext">let's talk.</div>
                    <div class="contact__details">
                        <div class="contact__gold">email</div>
                        <div>jaypardelobate@gmail.com</div>
                        <div class="contact__divider"></div>
                        <div class="contact__gold">phone</div>
                        <div>+639153904917</div>
                        <div class="contact__divider"></div>
                        <div>LinkedIN and Github</div>
                    </div>

                </div>
                <div class="contact__left">
                    
                    <div class="form__group">
                        <input type="text" class="form__input" placeholder="full name" id="name" required></input>
                        <label for="name" class="form__label">full name</label>
                    </div>
                    <div class="form__group">
                        <input type="email" class="form__input" placeholder="email address" id="email" required></input>
                        <label for="email" class="form__label">email address</label>
                        <textarea class="form__input" name="message" id="message" cols="30" rows="10" placeholder="your message"></textarea>
                    </div>
                    <br></br>
                    <a class='btn btn--white btn--animated' href='http://www.google.com' target='_blank'>send message.</a>

                </div>
            </section>
        </main>
                )
            }
            
export default Contact;