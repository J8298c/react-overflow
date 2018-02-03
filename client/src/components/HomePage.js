import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { fetch_all_posts } from '../actions/post_actions';
import Post from './Post';

class HomePage extends Component {
	componentDidMount() {
		console.log('hello HomePage');
		this.props.fetch_all_posts();
	}
	onVote(id, option) {
		console.log(id, option, 'params to postvote')
	}

	render() {
		console.log(this.props.allPosts, 'the props')
		return (
			<div>
				{
					this.props.allPosts ?
					_.map(this.props.allPosts, post => {
						if(!post.deleted) {
							return (
								<div key={post.id} style={homePageStyle.postContainer}>
								<Post title={post.title} body={post.body} voteScore={post.voteScore} commentCount={post.commentCount}
									timestamp={post.timestamp} onUpVote={() => { this.onVote(post.id, 'upVote')}}
									onDownVote={() => { this.onVote(post.id, 'downVote')}} id={post.id}/>
								</div>
							)
						}
					})
					: <div>Seems empty in here lets create a post</div>
				}
			</div>
		)
	}
}

function mapStateToProps({posts}) {
	const allPosts = posts.posts;
	return {
		allPosts
	}
}
export default connect(mapStateToProps, { fetch_all_posts })(HomePage);

const homePageStyle = {
	postContainer: {
		marginTop: '24px'
	}
}