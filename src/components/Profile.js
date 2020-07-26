import React from 'react';
import Button from "react-bootstrap/Button";

class Profile extends React.Component {
    render() {
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id="Profile">Profile</h3>
                <p>都内のIT企業勤務のプログラマー</p>
                <p>SoftBank運営の<span className="text-danger font-weight-bold">サイバー大学</span>出身</p>
                <p>睡眠の鬼である。</p>
                <Button className={'btn-danger'}>test button</Button>
            </div>
        );
    }
}

export default Profile;