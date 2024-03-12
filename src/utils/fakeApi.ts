import groupsData from "../utils/groups.json";
import { FilterOptions, GetGroupsResponse, IGroup } from "./types";
import { filterGroups } from "./utils";

const fakeDatabase = {
  groups: groupsData,
};

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

class FakeApi {
  async _getRequestResult<T>(data: T): Promise<T> {
    await delay(1000); // Имитация задержки сети
    return data; // Возвращаем данные
  }

  async getGroups(): Promise<GetGroupsResponse> {
    return this._getRequestResult({
      result: 1,
      data: fakeDatabase.groups as IGroup[],
    });
  }

  getFilteredData(
    data: IGroup[],
    filters: FilterOptions
  ): Promise<GetGroupsResponse> {
    return this._getRequestResult({
      result: 1,
      data: filterGroups(data, filters) as IGroup[],
    });
  }
}

const fakeApi = new FakeApi();

export default fakeApi;
