import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <p>Please Select song.</p>;
  }
  return (
    <div className="ui card">
      <div className="content">
        <h3>Song Details:</h3>
        <div className="description">{song.title}</div>
      </div>
      <div className="extra content">{song.duration}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    song: state.selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
