import { FixedLayout, FormLayoutGroup, Group, SplitCol } from "@vkontakte/vkui";
import { colors, FRIENDS_OPTION, GROUPS_OPTION } from "../../utils/constants";
import Filter from "../filter/filter";

interface IFiltersProps {
  handleChaningGroupTypeFilter: (type: string) => void;
  handleChangingAvatarFilter: (type: string) => void;
  handleChangingFriendsFilter: (type: string) => void;
}

const Filters: React.FC<IFiltersProps> = ({
  handleChaningGroupTypeFilter,
  handleChangingAvatarFilter,
  handleChangingFriendsFilter,
}: IFiltersProps): JSX.Element => {
  return (
    <Group>
      <FormLayoutGroup mode="horizontal">
        <Filter
          title="Выберите цвет аватарки"
          id="select-avatar-color"
          data={colors}
          initialState={"red"}
          onChange={handleChangingAvatarFilter}
        />
        <Filter
          title="Выберите тип группы"
          id="select-group-type"
          data={GROUPS_OPTION}
          initialState={"open"}
          onChange={handleChaningGroupTypeFilter}
        />
        <Filter
          title="Наличие друзей в группе"
          id="select-avatar-color"
          data={FRIENDS_OPTION}
          initialState={"yes"}
          onChange={handleChangingFriendsFilter}
        />
      </FormLayoutGroup>
    </Group>
  );
};

export default Filters;
