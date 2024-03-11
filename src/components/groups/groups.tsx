import {
  Avatar,
  Group,
  Header,
  IconButton,
  MiniInfoCell,
  SimpleCell,
  SplitCol,
  UsersStack,
} from "@vkontakte/vkui";
import { IGroup } from "../../utils/types";
import { defineSuffix } from "../../utils/utils";
import { useSelector } from "../../services/hooks";
import FollowersSection from "../followers-section/followers-section";

interface IGroupsProps {
  groups: IGroup[];
}

const Groups: React.FC<IGroupsProps> = ({
  groups,
}: IGroupsProps): JSX.Element => {
  const groupsRedux: IGroup[] = useSelector(
    (store) => store.groups.shownGroups
  );

  return (
    <Group header={<Header mode="secondary">Группы</Header>}>
      {groupsRedux.map((item, index) => {
        return (
          <SimpleCell
            key={item.id}
            before={
              <Avatar
                size={48}
                style={{ backgroundColor: item.avatar_color }}
              />
            }
            after={<IconButton label="Написать сообщение"></IconButton>}
            extraSubtitle={
              <FollowersSection
                id={item.id}
                followers={item.members_count}
                friends={item?.friends}
              />
            }
            subtitle={`${item.closed ? "Закрытая группа" : "Открытая группа"}`}
          >
            {item.name}
          </SimpleCell>
        );
      })}
    </Group>
  );
};

export default Groups;
