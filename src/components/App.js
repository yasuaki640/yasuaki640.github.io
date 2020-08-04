import React from 'react';
import {Container} from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Profile from "./Profile";
import MyaApp from "./MyApp";
import Portrait from "./Portrait";
import Videos from "./Videos";
import Qualifications from "./Qualifications";
import Title from "./Title";

function App() {
    return (
        <Container id="main-container" fluid className="py-2">
            <Header/>
            <Title/>
            <Portrait/>
            <Profile/>
            <MyaApp/>
            <Qualifications/>
            <Videos/>
        </Container>
    );
}

export default App;
