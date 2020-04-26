import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPostAndUser } from "../app/action/postAction";
import User from "./User";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostAndUser();
  }

  renderPost() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <User userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        <h1>Post List!</h1>
        {this.renderPost()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);
