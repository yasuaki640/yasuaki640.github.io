import React from 'react';
import {Nav} from 'react-bootstrap'
import {Button} from "react-bootstrap";

class Header extends React.Component {
    render() {
        return (
            <Nav className="sticky-top navbar-expand-md navbar-light bg-light mb-4">
                <Button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navber"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="ナビゲーションの切替">
                    <span className="navbar-toggler-icon"/>
                </Button>
                <div className="collapse navbar-collapse" id="navber">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#Profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Qualifications">Qualifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#MyApps">My Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Videos">Videos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./index.html" id="ja">日本語</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./index_en.html" id="en">English</a>
                        </li>
                    </ul>
                </div>
            </Nav>
        );
    }
}

export default Header;
