import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../app/action/songAction";

class SongList extends Component {
  render() {
    return (
      <div className="ui divided list">
        {this.props.songs.map((song, i) => {
          return (
            <div className="item" key={i}>
              <div className="right floated content">
                <button
                  className="ui button primary"
                  onClick={() => this.props.selectSong(song)}
                >
                  Select
                </button>
              </div>
              <div className="content">
                <h3>{song.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongList);
