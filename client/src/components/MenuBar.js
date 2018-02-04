import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchingCategories, isLoading } from '../actions/post_actions';
import { push } from 'react-router-redux'
class MenuBar extends Component {
  state = {}

  componentDidMount(props) {
    //etch all categpories
    this.props.fetchingCategories();
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    setTimeout(() => {
      this.props.isLoading(true);
    }, 1000)
    this.props.isLoading(false)
    
  }
  
  render() {
    const { activeItem } = this.state
    return (
      <Menu pointing>
          <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/'
        >
          React Overflow
        </Menu.Item>
          {
            this.props.categories ?
             this.props.categories.categories.map(category => (
              <Menu.Item key={category.name}
              name={category.name}
              active={activeItem === category.name}
              onClick={this.handleItemClick}
              link={true}
              as={Link}
              to={`/${category.name}/posts`}
              >
                {category.name}
              </Menu.Item>
             )) 
             : <div>nope</div>
          }
        <Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/posts/create'
          position='right'
        >
          Create Post
        </Menu.Item>
      </Menu>
    )
  }
}

function mapStateToProps({posts, routing}) {
  console.log(routing);
  const { categories } = posts
  return {
    categories
  }
}
export default connect(mapStateToProps, {fetchingCategories, isLoading})(MenuBar);