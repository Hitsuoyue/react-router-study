/**
 * Created by sylvia on 2018/1/4.
 */
import React from 'react';
import About from '../BasicComponents/Content/ProjectManage/index';
import topics from '../BasicComponents/Content/Topics/Topics';
import Test from '../BasicComponents/Content/Test/Test';
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
            path: '/userManage',
            icon: 'desktop',
            title: 'userManage',
            component: topics
        },
        {
            path: '/account',
            icon: 'user',
            title: 'account',
            component: About,
            children: [{
                path: '/signIn',
                icon: 'desktop',
                title: 'signIn'
            }, {
                path: '/signUp',
                icon: 'desktop',
                title: 'signUp'
            }, {
                path: '/signSuccess',
                icon: 'desktop',
                title: 'signSuccess'
            }]
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