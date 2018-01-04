/**
 * Created by sylvia on 2018/1/4.
 */
import React from 'react';
import About from '../Components/Content/About/index';
import topics from '../Components/Content/Topics/Topics';
import Test from '../Components/Content/Test/Test';
const sidebarConfig = {
    SidebarArr : [
        {
            path: '/about',
            icon: 'pie-chart',
            title: 'about',
            component: About,
            children:{
                path: '/about1',
                icon: 'desktop',
                title: 'about1'
            }
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
            children:{
                path: '/test1',
                icon: 'desktop',
                title: 'test1',
                children:{
                    path: '/test2',
                    icon: 'desktop',
                    title: 'test2'
                }
            }
        }
    ]
};
export default sidebarConfig;
