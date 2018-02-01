import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetching_all_posts } from '../actions/post_actions';

class PostListView extends Component {
    componentDidMount() {
        //fetch posts from server
        this.props.fetching_all_posts();

    }
    render() {
        return (
            <Grid centered columns={3}>
                <Grid.Row>
            {
                this.props.posts ?
                this.props.posts.map(post => (
                    <Grid.Column centered key={post.id}>
                        <Card>
                            <Card.Content header={post.title} />
                            <Card.Content description={post.body} />
                            <Grid.Column columns={2}>
                            <Card.Meta>
                                <p>{post.commentCount}</p>
                            </Card.Meta>
                            <Card.Meta>
                                <p>{post.voteScore}</p>
                            </Card.Meta>
                            </Grid.Column>
                        </Card>
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