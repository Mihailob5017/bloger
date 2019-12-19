import React from 'react'

const Blog = ({blog}) => {
    return (
        <li class="collection-item transparent avatar">
        <img src={require('./avatar.png')} alt="" class="circle"/>
        <span  class="title white-text">{blog.username}</span>
        <h6 className="white-text">{blog.header} <br/>
           {blog.body}
        </h6>
        <a href="#!" class="secondary-content"><i class="material-icons white-text">android</i></a>
      </li>
    )
}

export default Blog;
