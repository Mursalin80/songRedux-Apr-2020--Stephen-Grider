import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { selectSongReducer, songReduser } from "./reducer/songReducer";
import { postReducer, userReducer } from "./reducer/postReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    songs: songReduser,
    selectedSong: selectSongReducer,
    posts: postReducer,
    users: userReducer
  },
  middleware: [...getDefaultMiddleware()]
});

// const reducers = combineReducers({
//   songs: songReduser,
//   selectedSong: selectSongReducer,
//   posts: postReducer
// });

// const store = createStore(
//   reducers,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;
