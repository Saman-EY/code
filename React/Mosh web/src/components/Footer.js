import React, {useState} from 'react';
// style
import '../styles/Footer.css';
// img
import logo from '../images/logo.png';
import arrow from '../icons/chevron.svg';

const Footer = () => {

    let [state, setstate] = useState({
        list1: true,
        list2: false,
        list3: false,
        list4: false,
    });

    let Toggle = (e) => {
        let name = e.target.name
        setstate({
            ...state,
            [e.target.name]: !state[name],
        })
        
    }

  return (
    <footer className="Footer">
      <section className="FooterSection">
        {/* LOGO  */}
        <div className="footer-logo">
          <img src={logo} alt="" />
          <p>Copyright 2020 Mosh Hamedani</p>
        </div>

        {/* LINKS  */}
        <div className="uls-section">
            <ul className="ul-footer">
                <div>
                    <h5>PROODUCTS</h5>
                    <img className={state.list1 ? "" : "rotate-90"} name="list1" onClick={Toggle} src={arrow} alt="icon" />
                </div>
                <div className={state.list1 ? "ul-footer-li" : "ul-footer-li LiCollapse"}>
                    <li><a href="#">Website Hosting</a></li>
                    <li><a href="#">Free Automated</a></li>
                    <li><a href="#">Wordpress</a></li>
                    <li><a href="#">Migrations</a></li>
                </div>
            </ul>
            <ul className='ul-footer'>
                <div>
                    <h5>COMPANY</h5>
                    <img className={state.list2 ? "" : "rotate-90"} name="list2" onClick={Toggle} src={arrow} alt="icon" />
                </div>
                <div className={state.list2 ? "ul-footer-li" : "ul-footer-li LiCollapse"}>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Affiliates</a></li>
                    <li><a href="#">Blog</a></li>
                </div>
            </ul>
            <ul className='ul-footer'>
                <div>
                    <h5>SUPPORT</h5>
                    <img className={state.list3 ? "" : "rotate-90"} name="list3" onClick={Toggle} src={arrow} alt="icon" />
                </div>
                <div className={state.list3 ? "ul-footer-li" : "ul-footer-li LiCollapse"}>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Knowlege Base</a></li>
                    <li><a href="#">FAQ</a></li>
                </div>
            </ul>
            <ul className='ul-footer'>
                <div>
                    <h5>DOMAINS</h5>
                    <img className={state.list4 ? "" : "rotate-90"} name="list4" onClick={Toggle} src={arrow} alt="icon" />
                </div>
                <div className={state.list4 ? "ul-footer-li" : "ul-footer-li LiCollapse"}>
                    <li><a href="#">Domain Checker</a></li>
                    <li><a href="#">Domain Transfer</a></li>
                    <li><a href="#">Free Domain</a></li>
                </div>
            </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
