import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../utils/types";

export interface TFriendsListState {
  currentFriends: User[];
}

export const initialState: TFriendsListState = {
  currentFriends: [],
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setCurrentFriends(state: TFriendsListState, action: PayloadAction<User[]>) {
      console.log("in reducer friends");
      state.currentFriends = action.payload;
    },
  },
});
export const { setCurrentFriends } = friendsSlice.actions;

export default friendsSlice.reducer;
