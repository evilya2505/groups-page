import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterOptions, IGroup } from "../../utils/types";

export interface TGroupsListState {
  shownGroups: IGroup[];
  groups: IGroup[];
  filters: FilterOptions;
  request: boolean;
  requestFailed: boolean;
}

export const initialState: TGroupsListState = {
  shownGroups: [],
  groups: [],
  filters: {},
  request: false,
  requestFailed: false,
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
    setFiltersRequest(state: TGroupsListState) {
      state.request = true;
      state.requestFailed = false;
    },
    setFiltersSuccess(
      state: TGroupsListState,
      action: PayloadAction<{ groups: IGroup[]; filters: FilterOptions }>
    ) {
      state.shownGroups = action.payload.groups;
      state.filters = action.payload.filters;
      state.request = false;
      state.requestFailed = false;
    },
    requestFailed(state: TGroupsListState) {
      state.request = false;
      state.requestFailed = true;
    },
  },
});
export const {
  setShownGroups,
  setGroups,
  requestFailed,
  setFiltersSuccess,
  setFiltersRequest,
} = groupsSlice.actions;

export default groupsSlice.reducer;
