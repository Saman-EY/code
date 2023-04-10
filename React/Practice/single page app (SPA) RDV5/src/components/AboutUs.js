import React, { Component } from 'react';
import {Link , Route} from "react-router-dom"
import Phone from './Phone';
import SocialMedia from './SocialMedia';

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h3>About Us</h3>
                <ul>
                    <li><Link to="/aboutUs/Phone">Phone</Link></li>
                    <li><Link to="/aboutUs/Social">Social Medai</Link></li>
                </ul>

                <div>
                    <Route path="/aboutUs/Phone" component={Phone} />
                    <Route path="/aboutUs/Social" component={SocialMedia} />
                </div>

            </div>
        );
    }
}

export default AboutUs;