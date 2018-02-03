import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingAPost } from '../actions/post_actions';
import { fetching_post_comments } from '../actions/comment_actions';
import { Item, Button, Feed } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
class PostView extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchingAPost(id);
        this.props.fetching_post_comments(id);
    }

    render () {
        let elPost;
        this.props.posts.post ? elPost = this.props.posts.post : null
        return (
            <div>
                
            </div>
        )
    }
}

function mapStateToProps({comments, posts}) {
    console.log(posts)
    return {
        comments,
        posts
    }
}
export default connect(mapStateToProps, { fetchingAPost, fetching_post_comments })(PostView);
