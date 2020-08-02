import React from 'react';
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
        <div id="main-container">
            <Header/>
            <Title/>
            <Portrait/>
            <Profile/>
            <MyaApp/>
            <Qualifications/>
            <Videos/>
        </div>
    );
}

export default App;
