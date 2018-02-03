import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingAPost } from '../actions/post_actions';

class PostView extends Component {
    componentDidMount() {
        console.log(this.props.match.params.id)
        const { id } = this.props.match.params;
        this.props.fetchingAPost(id);
    }

    render () {
        console.log(this.props);
        return (
            <div>
                PostView
            </div>
        )
    }
}

function mapStateToProps({post}) {
    return {
        post
    }
}
export default connect(mapStateToProps, { fetchingAPost })(PostView);
