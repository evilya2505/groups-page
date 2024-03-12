import fakeApi from "../../utils/fakeApi";
import { FilterOptions, IGroup } from "../../utils/types";
import {
  requestFailed,
  setFiltersRequest,
  setFiltersSuccess,
} from "../reducers/groups";
import { AppDispatch } from "../store";

export const setFilters = (groups: IGroup[], filters: FilterOptions) => {
  return function (dispatch: AppDispatch) {
    dispatch(setFiltersRequest());

    fakeApi
      .getFilteredData(groups, filters)
      .then((data) => {
        if (data.result === 0) dispatch(requestFailed());
        dispatch(
          setFiltersSuccess({ groups: data?.data || [], filters: filters })
        );
      })
      .catch((err) => {
        dispatch(requestFailed());
      });
  };
};
