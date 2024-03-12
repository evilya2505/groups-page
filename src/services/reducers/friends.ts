import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../utils/types";

export interface TFriendsListState {
  currentFriends: User[];
  groupName: string;
  isOpen: boolean;
}

export const initialState: TFriendsListState = {
  currentFriends: [],
  groupName: "",
  isOpen: false,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {
    setCurrentFriends(state: TFriendsListState, action: PayloadAction<User[]>) {
      state.currentFriends = action.payload;
    },
    setOpening(state: TFriendsListState, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
    setGroupName(state: TFriendsListState, action: PayloadAction<string>) {
      state.groupName = action.payload;
    },
  },
});
export const { setCurrentFriends, setOpening, setGroupName } =
  friendsSlice.actions;

export default friendsSlice.reducer;
