import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListView from './PostListView';

const RouterComponent = () => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={PostListView} />
        </div>
    </BrowserRouter>
);

export default RouterComponent;

