export const songReduser = () => {
  return [
    { title: "No Scrubs", duration: "4:15" },
    { title: "Macarena", duration: "3:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it The Way", duration: "5:05" }
  ];
};

export const selectSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case "SELECT_SONG":
      return action.song;

    default:
      return selectedSong;
  }
};
