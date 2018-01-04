/**
 * Created by sylvia on 2018/1/4.
 */
import React from 'react';
const One = () => <h3>One</h3>;
const OneOne = () => <h3>OneOne</h3>;
const OneOneOne = () => <h3>OneOneOne</h3>;
const Two = () => <h3>Two</h3>;
const Three = () => <h3>Three</h3>;
const sidebarConfig = {
    SidebarArr : [
        {
            path: '/one',
            icon: 'pie-chart',
            title: 'one',
            component: One,
            children:{
                path: '/one-one',
                icon: 'desktop',
                title: 'one-one',
                component: OneOne,
                children:{
                    path: '/one-one-one',
                    icon: 'desktop',
                    title: 'one-one-one',
                    component: OneOneOne
                }
            }
        },
        {
            path: '/two',
            icon: 'desktop',
            title: 'two',
            component: Two
        },
        {
            path: '/three',
            icon: 'user',
            title: 'three',
            component: Three
        }
    ],
    One: One,
    Two: Two,
    Three: Three
};
export default sidebarConfig;
