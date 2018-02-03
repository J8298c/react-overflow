import React from 'react';
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = (props) => (
	<Item style={postStyles.containerStyle}>
		<Item.Header style={postStyles.headerStyle}>{props.title}</Item.Header>
		<Item.Description style={postStyles.bodyStyle}>{props.body}</Item.Description>
		<Item.Meta style={postStyles.metaContainer}>
			<p>Likes: {props.voteScore}</p>
			<p>Comments: {props.commentCount}</p>
		</Item.Meta>
		<Item.Extra style={postStyles.buttonContainer}>
			<Button.Group >
				<Button color='blue' onClick={props.onUpVote}>Like</Button>
				<Button.Or />
				<Button color='red' onClick={props.onDownVote}>UnLike</Button>
			</Button.Group>
			<Button.Group style={postStyles.buttonStyle}>
			<Link to={`/edit/${props.id}`}>
				<Button color='yellow' onClick={props.edit}>Edit</Button>
			</Link>
				<Button.Or />
				<Button color='pink' onClick={props.delete}>Delete</Button>
			</Button.Group>
		</Item.Extra>
		<Item.Meta style={postStyles.metaContainer}>
			<span>{props.timestamp}</span>
		</Item.Meta>	
	</Item>
)

export default Post;

const postStyles = {
	headerStyle: {
		textAlign: 'center',
		fontSize: '18px',
		color: '#fcfcfc'	},
	metaContainer: {
		width: '100%',
		textAlign: 'center',

	},
	buttonContainer: {
		margin: '12px auto',
		width: '100%'
	},
	containerStyle: {
		width: '65%',
		display: 'block',
		margin: '25px auto',
		backgroundColor: '#2196F3',
		padding: '10px',
		color: '#fcfcfc'
	},
	bodyStyle: {
		textAlign: 'center',
		width: '75%',
		display: 'block',
		margin: '0 auto',

	},
	buttonStyle: {
		marginLeft: '35%'
	}
}