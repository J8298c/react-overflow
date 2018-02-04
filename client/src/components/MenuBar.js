import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchingCategories } from '../actions/post_actions';
 
class MenuBar extends Component {
  state = {}

  componentDidMount(props) {
    //etch all categpories
    this.props.fetchingCategories();
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

          {/* {
            this.props.categories.categories ? 
              this.props.categories.map(category => (
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
              : null
          } */}
        <Menu.Item
          name='create'
          active={activeItem === 'create'}
          onClick={this.handleItemClick}
          link={true}
          as={Link}
          to='/posts/new'
          position='right'
        >
          Create Post
        </Menu.Item>
      </Menu>
    )
  }
}

function mapStateToProps({posts}) {
  const { categories } = posts
  let postCategories = categories
  if(postCategories) { console.log(postCategories[0])}
  return {
    categories
  }
}
export default connect(mapStateToProps, {fetchingCategories})(MenuBar);