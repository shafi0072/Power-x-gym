import React from 'react';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const Footer = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row mt-5 container">
                    <div className="col-md-4">
                        <h1 className='text-light' style={{fontFamily: "'Anton', sans-serif"}}>POWER<span className='text-warning'>X</span></h1>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <strong className="text-light">Need Help?</strong>
                                <br/>
                                <br/>
                                <p className="text-light">Help Center</p>
                                
                                
                                <p className="text-light">Email Support</p>
                                <p className="text-light">Live Chat</p>
                                <p className="text-light">Gift Certificates</p>
                                <p className="text-light">Send us Feedback</p>
                            </div>
                            <div className="col-md-6">
                            <strong className="text-light">Digital Resources</strong>
                                <br/>
                                <br/>
                                <p className="text-light">Articles</p>
                                <p className="text-light">E-books</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                            <strong className="text-light">Contract With Us</strong>
                                <br/>
                                <br/>
                                <YouTubeIcon className='text-light'></YouTubeIcon>
                                <FacebookIcon className='text-light'></FacebookIcon>
                                <InstagramIcon className="text-light"></InstagramIcon>
                                <TwitterIcon className="text-light"></TwitterIcon>
                                <WhatsAppIcon className="text-light"></WhatsAppIcon>
                                <br/>
                                
                                <p className="text-light">Forum</p>
                            </div>
                            <div className="col-md-6">
                            <strong className="text-light">Join Our Newletter</strong>
                                <br/>
                                <br/>
                                <p className="text-light">Get exclusive news</p>
                                
                                
                                <p className="text-light">Updates</p>
                                <p className="text-light">Live Chat</p>
                    
                            </div>
                        </div>
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Footer;