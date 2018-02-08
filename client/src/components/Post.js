import React from 'react';
import { Item, Button } from 'semantic-ui-react';
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
            <Item.Extra>
                <Button.Group>
                    <Button color='blue' onClick={props.onUpVote} content='Like' />
                    <Button.Or />
                    <Button color='pink' onClick={props.onDownVote} content='UnLike' />
                </Button.Group>
            </Item.Extra>
        </Item.Content>
    </Item>
);
export default Post;