import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'; 
import uuid from 'uuid';


class CreatePost extends Component {
	state = {

    }

    onSubmit = () => {
        const { title, author, body, category } = this.state;
        const id = uuid();
        const timestamp = Date.now();
        const post = {id, title, author, body, timestamp, category};
        this.props.addNewPost(post, 'post');
    }

	render() {
		return (
			  <div>
                <h1 style={styles.fontStyle}>Create a New Post</h1>
                 <Form style={styles.formStyle}>
                    <Form.Input 
                        placeholder='Enter a Title' label='Post Title' 
                            onChange={(event) => { this.setState({ title: event.target.value})}}
                            />
                    <Form.Input 
                        placeholder='Enter a authors name' label='Post Author' 
                            onChange={(event) => { this.setState({ author: event.target.value})}}
                            />
                    <Form.TextArea placeholder='Enter your post' label='Post' 
                        onChange={(event) => { this.setState({body: event.target.value})}}
                        />

                    <select onChange = {(event) => {this.setState({ category: event.target.value})}}>
                        <option defaultValue="react">React</option>
                        <option value="redux">Redux</option>
                        <option  value="udacity">udaicty</option>
                    </select>
                </Form>
                <Form.Field onClick={() => { this.onSubmit()} } control={Button} style={styles.buttonStyle}>Submit</Form.Field>
            </div>
		)
	}
}

export default CreatePost;
const styles = {
    fontStyle : { 
        color: '#85f589',
        textAlign: 'center'
    },
    formStyle : {
        width: '75%',
        margin: '0 auto',
        color: '#ee82c3'
    },
    buttonStyle : {
        margin: '24px auto',
        display: 'block',
        backgroundColor: '#85f589',
        color: '#ee82c3'
    }
}


