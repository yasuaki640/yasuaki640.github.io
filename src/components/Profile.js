import React from 'react';

class Profile extends React.Component {

    render() {
        const contentTitle = 'Profile';
        return (
            <div className="content mb-5">
                <h3 className="mb-3" id={contentTitle}>{contentTitle}</h3>
                {this.sentence()}
            </div>
        );
    }

    sentence() {
        return (
            <>
                <p>都内のIT企業勤務のプログラマー</p>
                <p>SoftBank運営の<span className="text-danger font-weight-bold">サイバー大学</span>出身</p>
                <p>睡眠の鬼である。</p>
            </>
        );

    }


}

export default Profile;