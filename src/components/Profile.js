import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id="Profile">Profile</h3>
                <p>都内のIT企業勤務のプログラマー</p>
                <p>SoftBank運営の<span className="text-danger font-weight-bold">サイバー大学</span>出身</p>
                <p>睡眠の鬼である。</p>
            </div>
        );
    }
}

export default Profile;