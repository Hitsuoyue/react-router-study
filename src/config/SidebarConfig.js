/**
 * Created by sylvia on 2018/1/4.
 */
import React from 'react';
import ProjectManage from '../BasicComponents/Content/ProjectManage/index';
import UserManage from '../BasicComponents/Content/UserManage/index';
import LoginLayout from '../Layout/LoginLayout';
const sidebarConfig = {
    SidebarArr: [
        {
            path: '/projectManage',
            icon: 'pie-chart',
            title: 'projectManage',
            component: ProjectManage,
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
            component: UserManage
        },
        {
            path: '/login',
            icon: 'user',
            title: 'account',
            component: LoginLayout,
            children: [{
                path: '',
                icon: 'desktop',
                title: 'signIn'
            }, {
                path: '/register',
                icon: 'desktop',
                title: 'signUp'
            }, {
                path: '/success',
                icon: 'desktop',
                title: 'signSuccess'
            }]
        }
    ]
};
export default sidebarConfig;