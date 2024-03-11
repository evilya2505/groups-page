import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IGroup } from "../../utils/types";

export interface TGroupsListState {
  shownGroups: IGroup[];
  groups: IGroup[];
}

export const initialState: TGroupsListState = {
  shownGroups: [],
  groups: [],
};

const groupsSlice = createSlice({
  name: "groups",
  initialState,
  reducers: {
    setShownGroups(state: TGroupsListState, action: PayloadAction<IGroup[]>) {
      state.shownGroups = action.payload;
    },
    setGroups(state: TGroupsListState, action: PayloadAction<IGroup[]>) {
      state.groups = action.payload;
    },
  },
});
export const { setShownGroups, setGroups } = groupsSlice.actions;

export default groupsSlice.reducer;
