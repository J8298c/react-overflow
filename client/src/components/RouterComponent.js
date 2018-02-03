import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PostListView from './PostListView';
import PostView from './PostView';

const RouterComponent = () => (
    <BrowserRouter>
        <div>
            <Route exact path='/' component={PostListView} />
            <Route exact path='/:category/:id' component={PostView} />
        </div>
    </BrowserRouter>
);

export default RouterComponent;

