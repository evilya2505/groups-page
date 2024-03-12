import { combineReducers } from "redux";
import groupsSlice from "./groups";
import friendsSlice from "./friends";

export const rootReducer = combineReducers({
  groups: groupsSlice,
  friends: friendsSlice,
});
