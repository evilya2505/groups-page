import {
  Avatar,
  Group,
  Header,
  IconButton,
  SimpleCell,
  Spinner,
} from "@vkontakte/vkui";
import { IGroup } from "../../utils/types";
import { useSelector } from "../../services/hooks";
import FollowersSection from "../followers-section/followers-section";

import groupsStyles from "./groups.module.css";

interface IGroupsProps {}

const Groups: React.FC<IGroupsProps> = (): JSX.Element => {
  const groupsRedux: IGroup[] = useSelector(
    (store) => store.groups.shownGroups
  );
  const isError: boolean = useSelector((store) => store.groups.requestFailed);
  const isLoading: boolean = useSelector((store) => store.groups.request);

  return (
    <Group
      aria-busy={isLoading}
      className={groupsStyles.group}
      header={<Header mode="secondary">Группы</Header>}
    >
      {isLoading ? (
        <Spinner size="large" style={{ margin: "20px 0" }} />
      ) : (
        <>
          {" "}
          {!isError &&
            groupsRedux.map((item) => {
              return (
                <SimpleCell
                  key={item.id}
                  before={
                    <Avatar
                      size={100}
                      style={{ backgroundColor: item.avatar_color }}
                    />
                  }
                  after={<IconButton label="Написать сообщение"></IconButton>}
                  extraSubtitle={
                    <FollowersSection
                      groupName={item.name}
                      followers={item.members_count}
                      friends={item?.friends}
                    />
                  }
                  subtitle={
                    item.closed === undefined
                      ? ""
                      : `${item.closed ? "Закрытая группа" : "Открытая группа"}`
                  }
                >
                  {item.name ? item.name : ""}
                </SimpleCell>
              );
            })}
          <div className={groupsStyles.container}>
            {isError && <p style={{ margin: "30px auto" }}>Произошла ошибка</p>}
            {groupsRedux.length === 0 && !isError && (
              <p style={{ margin: "30px auto" }}>Нет групп</p>
            )}
          </div>
        </>
      )}
    </Group>
  );
};

export default Groups;
