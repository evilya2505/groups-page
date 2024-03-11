import React from "react";
// import appStyles from "./app.module.css";
import mockData from "../../utils/groups.json";
import { IOption, GetGroupsResponse } from "../../utils/types";
import {
  View,
  Panel,
  PanelHeader,
  AppRoot,
  SplitCol,
  SplitLayout,
  usePlatform,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import {
  filterByAvatar,
  filterByFriends,
  filterByGoupType,
  findDistinctAvatarColors,
} from "../../utils/utils";
import Filters from "../filters/filters";
import Groups from "../groups/groups";
import { useDispatch } from "../../services/hooks";
import { setGroups, setShownGroups } from "../../services/reducers/groups";

const App = () => {
  const dispatch = useDispatch();
  const testData: GetGroupsResponse = { result: 1, data: mockData };
  const colors: IOption[] = testData?.data
    ? findDistinctAvatarColors(testData?.data)
    : [];

  React.useEffect(() => {
    console.log(testData);
    console.log(colors);
    dispatch(setShownGroups(testData?.data || []));
    dispatch(setGroups(testData?.data || []));
  }, []);

  function handleChaningGroupTypeFilter(type: string) {
    dispatch(setShownGroups(filterByGoupType(type, testData?.data || [])));
  }

  function handleChangingAvatarFilter(type: string) {
    dispatch(setShownGroups(filterByAvatar(type, testData?.data || [])));
  }

  function handleChangingFriendsFilter(type: string) {
    dispatch(setShownGroups(filterByFriends(type, testData?.data || [])));
  }

  return (
    <AppRoot>
      <SplitLayout
        style={{
          justifyContent: "center",
          margin: "0 auto",
          maxWidth: "1200px",
          padding: "10px",
        }}
      >
        <SplitCol>
          <View activePanel="main">
            <Panel id="main">
              <Filters
                handleChaningGroupTypeFilter={handleChaningGroupTypeFilter}
                handleChangingAvatarFilter={handleChangingAvatarFilter}
                handleChangingFriendsFilter={handleChangingFriendsFilter}
              />
              <Groups groups={testData?.data || []} />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
