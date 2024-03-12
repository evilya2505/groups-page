import React from "react";
import { FilterOptions } from "../../utils/types";
import { View, Panel, AppRoot, SplitCol, SplitLayout } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Filters from "../filters/filters";
import Groups from "../groups/groups";
import { useDispatch, useSelector } from "../../services/hooks";
import { setFilters } from "../../services/actions/groups";
import { useSearchParams } from "react-router-dom";
import appStyles from "./app.module.css";
import Modal from "../../modal/modal";

const App = () => {
  const dispatch = useDispatch();
  const groups = useSelector((store) => store.groups.groups);
  const [searchParams] = useSearchParams();

  React.useEffect(() => {
    const optionObj: FilterOptions = {};

    optionObj.type = searchParams.get("type") || "any";
    optionObj.friends = searchParams.get("friends") || "any";
    optionObj.avatarColor = searchParams.get("avatarColor") || "any";

    dispatch(setFilters(optionObj));
  }, [searchParams, dispatch, groups]);

  return (
    <AppRoot>
      <SplitLayout className={appStyles.app} modal={<Modal />}>
        <SplitCol>
          <View activePanel="main">
            <Panel id="main">
              <Filters />
              <Groups />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;
