import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <footer className='footer'>
            <section className="link">
                <div className="logos">
                    <a><i><FacebookIcon /></i></a>
                    <a><i><InstagramIcon /></i></a>
                    <a><i><TwitterIcon /></i></a>
                    <a><i><YouTubeIcon /></i></a>
                </div>
                <div className="sub-links">
                    <ul>
                        <li><a>Audio and Subtitles</a></li>
                        <li><a>Audio Description</a></li>
                        <li><a>Help Center</a></li>
                        <li><a>Gift Cards</a></li>
                        <li><a>Media Center</a></li>
                        <li><a>Investor Relations</a></li>
                        <li><a>Jobs</a></li>
                        <li><a>Terms of Use</a></li>
                        <li><a>Privacy</a></li>
                        <li><a>Legal Notices</a></li>
                        <li><a>Corporate Information</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </div>
            </section>
            <section className='copyright'>
                <p className='text__center'>© 1997-2022 Netflix, Inc.</p>
                <p className='text__center'>Ryme Lehna - 2022</p>
            </section>
        </footer>
            );
}

            export default Footer;