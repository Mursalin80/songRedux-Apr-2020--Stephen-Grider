import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import PostList from "./PostList";

function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
      <br />
      {/* 
        new Ap
       */}

      <div className="ui row">
        <div className="column fourteen wide">
          <PostList />
        </div>
        <div className="column eight wide"></div>
      </div>
    </div>
  );
}

export default App;
