import fakeApi from "../../utils/fakeApi";
import { FilterOptions } from "../../utils/types";
import {
  requestFailed,
  setFiltersRequest,
  setFiltersSuccess,
} from "../reducers/groups";
import { AppDispatch } from "../store";

export const setFilters = (filters: FilterOptions) => {
  return function (dispatch: AppDispatch) {
    dispatch(setFiltersRequest());

    fakeApi
      .getFilteredData(filters)
      .then((data) => {
        if (data.result === 0) {
          dispatch(requestFailed());
          return 0;
        }
        dispatch(
          setFiltersSuccess({ groups: data?.data || [], filters: filters })
        );
      })
      .catch((err) => {
        dispatch(requestFailed());
      });
  };
};
