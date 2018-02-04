import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'; 

class CreatePost extends Component {
	state = {

    }
    
	onSave() {
		console.log(this.state);
		//submit form then push user to category
	}

	render() {
		return (
			  <div>
                <h1 style={fontStyle}>Create a New Post</h1>
                 <Form style={formStyle}>
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
                <Form.Field onClick={ this.onSubmit} control={Button} style={buttonStyle}>Submit</Form.Field>
            </div>
		)
	}
}

export default CreatePost;
