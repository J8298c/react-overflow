import React, { Component } from 'react';
import { Grid, Item, Button, Feed, } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetching_all_posts, voting_on_post } from '../actions/post_actions';
import { Link } from 'react-router-dom';

class PostListView extends Component {
    componentDidMount() {
        //fetch posts from server
        this.props.fetching_all_posts();

    }

    onVote(option, id) {
        this.props.voting_on_post(id, option);
    }

    render() {
        return (
            <Grid columns={2}>
                <Grid.Row columns={2}>
            {
                this.props.posts ?
                this.props.posts.map(post => (
                    <Grid.Column key={post.id}>
                       <Item>
                           <Link to={`post/${post.id}`}>
                           <Item.Header>{post.title}</Item.Header>
                           </Link>
                           <Item.Content>{post.body}</Item.Content>
                           <Item.Extra>
                               <Item.Content>Likes: {post.voteScore}</Item.Content>
                               <Item.Content>Date: {post.timestamp}</Item.Content>
                               <Item.Content>Comments: {post.commentCount}</Item.Content>
                           </Item.Extra>
                           <Item.Extra>
                           <Button.Group>
                                <Button onClick={() => { this.onVote('upVote', post.id)}} positive>Like</Button>
                                <Button.Or />
                                <Button onClick={() => { this.onVote('downVote', post.id)}}>Unlike</Button>
                            </Button.Group>
                           </Item.Extra>
                           <Item.Extra>
                               <Feed.Event>
                                    <Feed.Label>

                                    </Feed.Label>
                               </Feed.Event>
                           </Item.Extra>
                       </Item>
                    </Grid.Column>
                ))
                : null
            }
            </Grid.Row>
            </Grid>
        )
    }
}

function mapStateToProps({posts}) {
    console.log(posts);
    return {
        posts
    }
}

export default connect(mapStateToProps, { fetching_all_posts, voting_on_post })(PostListView)