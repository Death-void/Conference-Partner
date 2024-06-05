import React, { Component } from 'react';

import './index.css';

/**
 * @Author: miansen
 * @Date: 2018/12/16
 * @description: 关于
 */
class About extends Component{
    render() {
        return (
            <div className="about">
                <h3 className="mb-25">关于Conference Partner</h3>
                <p>Conference Partner是用SpringBoot、React和MySQL开发的会议信息社区</p>
            </div>
        );
    }
}

export default About;