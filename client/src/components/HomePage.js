import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { fetchAllPosts } from '../actions/post_actions';
import Post from './Post';

class HomePage extends Component {
    componentDidMount() {
       this.props.fetchAllPosts();
    }
    render() {
        if(this.props.post){
            console.log(this.props.post.posts)
        }
        return (
            <div>
                {
                    this.props.post.posts ?
                        _.map(this.props.post.posts, post => (
                            <Post key={post.id} id={post.id} title={post.title}
                            commentCount={post.commentCount} voteScore={post.voteScore}
                            category={post.category}
                            />
                        ))
                        :
                        <div>Seems Empty in here lets start posting</div>
                }
            </div>
        )
    }
}

function mapStateToProps({post}) {
    console.log(post)
    return {
        post
    }
}

export default connect(mapStateToProps, { fetchAllPosts })(HomePage)