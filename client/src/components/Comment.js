import React, { Component } from 'react';

class Comment extends Component {
	componentDidMount(props) {
		//get post id
		console.log(this.props)
	}

	render() {
		return (
           <div>
           	Comment
           </div>
		)
	}
}

export default Comment;
