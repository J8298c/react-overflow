import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetching_all_posts } from '../actions/post_actions';

class PostListView extends Component {
    componentDidMount() {
        //fetch posts from server
        this.props.fetching_all_posts();

    }
    render() {
        return (
            <Grid centered columns={2}>
                <Grid.Row>
            {
                this.props.posts ?
                this.props.posts.map(post => (
                    <Grid.Column centered key={post.id}>
                       <Item>
                           <Item.Header>{post.title}</Item.Header>
                           <Item.Content>{post.body}</Item.Content>
                           <Item.Extra>
                               <Item.Content>Likes: {post.voteScore}</Item.Content>
                               <Item.Content>Date: {post.timestamp}</Item.Content>
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

export default connect(mapStateToProps, { fetching_all_posts })(PostListView)