import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import Post from './Post';
import { fetchingAPost } from '../actions/post_actions';

class PostPage extends Component {
    componentDidMount(props) {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                PostPage
            </div>
        )
    }
}

function mapStateToProps({post}) {
    console.log(posts)
    return {
        posts
    }
}

export default connect(mapStateToProps, {fetchingAPost})(PostPage);