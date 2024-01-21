import React from 'react'
import '../../App.css';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";


function Footer() {
    return (
        <>
            <section id="Footer">
                <div className="footer">
                    <div className="row w-100 m-0 newuser">
                        <div className="container">
                            <h3 className='pb-3'>SUBSCRIBE MY NEWSLETTER</h3>
                            <div className="input">
                                <input type="text" placeholder='Enter Your Email'></input>
                                <button>Notify Now</button>
                            </div>
                        </div>
                    </div>
                    <div id="mypersonalinfo">
                        <div className="container">
                            <div className="row mypersonalinfo">
                                <div className="location col-lg-4 col-12 d-flex align-items-center py-5">
                                    <div className="icon me-3">
                                        <CiLocationOn />
                                    </div>
                                    <div className="icon-info">
                                        <h4>Address</h4>
                                        <a href='/'>C-803 Eden Arcon , Surat <br />Gujrat 395010</a >
                                    </div>
                                </div>
                                <div className="call col-lg-4 col-12 d-flex align-items-center py-5">
                                    <div className="icon me-3">
                                        <CiPhone />
                                    </div>
                                    <div className="icon-info">
                                        <h4>Lets Talk Us</h4>
                                        <a href='/'>+91 85112 58591</a>
                                    </div>
                                </div>
                                <div className="mail col-lg-4 col-12 d-flex align-items-center py-5">
                                    <div className="icon me-3">
                                        <CiMail />
                                    </div>
                                    <div className="icon-info">
                                        <h4>Send Us Email</h4>
                                        <a href='/'>lakkadumang306@gmail.com</a>
                                    </div>
                                </div>
                            </div>

                            <div className="row copyright justify-content-center align-items-center">
                                <div className="col-lg-6 col-12 d-flex justify-content-lg-start justify-content-center">
                                    <a href='/'>© lakkad 2023 | All Rights Reserved</a>
                                </div>
                                <div className="col-lg-6 col-12 d-md-flex text-center justify-content-sm-around justify-content-center align-items-center pt-3 pt-lg-0">
                                    <div className='pt-2 pt-sm-0'><a href='/'>Terms & Condition</a></div>
                                    <div className='pt-2 pt-sm-0'><a href='/'>Privacy Policy</a></div>
                                    <div className='pt-2 pt-sm-0'><a href='/'>Sitemap</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Footer