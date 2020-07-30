import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Footer from "./Footer";
import Profile from "./Profile";
import MyaApp from "./MyApp";
import Portrait from "./Portrait";

function App() {
    return (
        <div id="main-container">
            <Header/>
            <Portrait/>
            <Profile/>
            <MyaApp/>
            <Footer/>
        </div>
    );
}

export default App;
