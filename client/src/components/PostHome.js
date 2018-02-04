import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { fetchin_a_post, voting_on_post } from '../actions/post_actions'; 

class PostHome extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchin_a_post(id)
        console.log('why are you firing off')
    }

    onVote(id, option) {
    	this.props.voting_on_post(id, option);
    }

    render() {
        return (
            <div>
            	{
            		this.props.post ?
            		<Post title={this.props.post.title} body={this.props.post.body} voteScore={this.props.post.voteScore} 
            			commentCount={this.props.post.commentCount}
						timestamp={this.props.post.timestamp} onUpVote={() => { this.onVote(this.props.post.id, 'upVote')}}
						onDownVote={() => { this.onVote(this.props.post.id, 'downVote')}} id={this.props.post.id}
						urlLink={false} category={this.props.post.category} 
						/>

            		:null
            	}
            </div>
        )
    }
}

function mapStateToProps({posts}) {
   const { post } = posts;
   return {
   	post
   }
}

export default connect(mapStateToProps, { fetchin_a_post, voting_on_post })(PostHome);