/**
 * Created by sylvia on 2018/1/4.
 */
import React from 'react';
import About from '../Components/Content/About/index';
import topics from '../Components/Content/Topics/Topics';
import Test from '../Components/Content/Test/Test';
const sidebarConfig = {
    SidebarArr: [
        {
            path: '/projectManage',
            icon: 'pie-chart',
            title: 'projectManage',
            component: About,
            children: [{
                path: '/personal',
                icon: 'desktop',
                title: 'personal'
            }, {
                path: '/about2',
                icon: 'desktop',
                title: 'about2',
                children: [{
                    path: '/about22',
                    icon: 'desktop',
                    title: 'about22'
                }]
            }]
        },
        {
            path: '/topics',
            icon: 'desktop',
            title: 'topics',
            component: topics
        },
        {
            path: '/test',
            icon: 'user',
            title: 'test',
            component: Test,
            children: [{
                path: '/test1',
                icon: 'desktop',
                title: 'test1',
                children: [{
                    path: '/test2',
                    icon: 'desktop',
                    title: 'test2'
                }]
            }]
        }
    ]
};
export default sidebarConfig;