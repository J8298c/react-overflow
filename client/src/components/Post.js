import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const Post = (props) => (
    <Item>
        <Item.Content>
            <Link to={`/posts/${props.category}/${props.id}`}>
            <Item.Header>{props.title}</Item.Header>
            </Link>
            <Item.Description>
                {props.body}
            </Item.Description>
            <Item.Extra>
                <p>Comments: {props.commentCount}</p>
                <p>Likes: {props.voteScore}</p>
            </Item.Extra>
        </Item.Content>
    </Item>
);
export default Post;