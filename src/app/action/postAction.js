import jsonPlaceH from "../../api/jsonPlaceHolder";
import _ from "lodash";

// export const fetchPost = async () => {
//   const responce = await jsonPlaceH.get("/post");
//   return {
//     type: "FETCH_POST",
//     payload: responce
//   };
// };

export const fetchPost = () => {
  return async dispatch => {
    const responce = await jsonPlaceH.get("/posts");
    dispatch({
      type: "FETCH_POST",
      payload: responce.data
    });
  };
};

export const fetchPostAndUser = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPost());
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    userIds.forEach(id => dispatch(fetchUser(id)));
  };
};

export const fetchUser = id => {
  return async dispatch => {
    const responce = await jsonPlaceH.get(`/users/${id}`);
    // console.log(responce);
    dispatch({
      type: "FETCH_USER",
      payload: responce.data
    });
  };
};
