import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as Mail } from '../../assets/icons/mail.svg';
import { ReactComponent as GitHub } from '../../assets/icons/github.svg';
import { ReactComponent as LinkedIn } from '../../assets/icons/linkedin.svg';
import './Footer.css';

function Footer() {
    return(
        <footer className="pt-3 mt-3 bg-light">
            <div className="container-fluid container-min-max-width d-flex justify-content-between">
                <div className="footer-group d-flex flex-column">
                    <h3 className="h5">Support:</h3>
                    <Link to='/about' className="text-dark">About</Link>
                    <Link to='/terms-and-conditions' className="text-dark">Terms and conditions</Link>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Contact me:</h3>
                    <p className="m-0">
                        <a href="mailto:alextanase1598@gmail.com" className="text-dark">
                            <Mail className="mr-1 mb-1 footer-icon"/>
                            alextanase1598@gmail.com
                        </a>
                    </p>
                    <p className="m-0"><Phone className="mr-1 footer-icon"/>+40744406910</p>
                </div>
                <div className="footer-group">
                    <h3 className="h5">Social:</h3>
                    <p className="m-0">
                        <a href="https://github.com/alexandru1598" className="text-dark">
                            <GitHub className="mr-1 mb-1 footer-icon"/>
                            alexandru1598
                        </a>
                    </p>
                    <p className="m-0">
                        <a href="https://www.linkedin.com/in/alextanase98/" className="text-dark">
                            <LinkedIn className="mr-1 footer-icon"/>
                            alextanase98
                        </a>
                    </p>
                </div>
            </div>
            <div className="text-center py-3">
                &copy; Alexandru Tanase, 2021
            </div>
        </footer>
    );
}

export default Footer;