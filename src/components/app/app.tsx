import React from "react";
import mockData from "../../utils/groups.json";
import { IOption, GetGroupsResponse, FilterOptions } from "../../utils/types";
import { View, Panel, AppRoot, SplitCol, SplitLayout } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { findDistinctAvatarColors } from "../../utils/utils";
import Filters from "../filters/filters";
import Groups from "../groups/groups";
import { useDispatch, useSelector } from "../../services/hooks";
import { setGroups, setShownGroups } from "../../services/reducers/groups";
import fakeApi from "../../utils/fakeApi";
import { setFilters } from "../../services/actions/groups";

const App = () => {
  const dispatch = useDispatch();
  const testData: GetGroupsResponse = { result: 1, data: mockData };
  const filters = useSelector((store) => store.groups.filters);
  const groups = useSelector((store) => store.groups.groups);

  const colors: IOption[] = testData?.data
    ? findDistinctAvatarColors(testData?.data)
    : [];

  React.useEffect(() => {
    console.log(testData);
    console.log(colors);
    fakeApi.getGroups().then((res) => {
      dispatch(setShownGroups(res?.data || []));
      dispatch(setGroups(res?.data || []));
    });
  }, []);

  function handleChaningFilter(
    type: string,
    optionName: "type" | "friends" | "avatarColor"
  ) {
    console.log(type, optionName);

    const optionsObj: FilterOptions = JSON.parse(JSON.stringify(filters));
    optionsObj[optionName] = type;

    console.log(optionsObj);
    dispatch(setFilters(groups, optionsObj));
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
              <Filters handleChaningFilter={handleChaningFilter} />
              <Groups groups={testData?.data || []} />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
