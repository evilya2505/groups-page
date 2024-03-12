import { FixedLayout, FormLayoutGroup, Group, SplitCol } from "@vkontakte/vkui";
import { colors, FRIENDS_OPTION, GROUPS_OPTION } from "../../utils/constants";
import Filter from "../filter/filter";
import { FilterOptions } from "../../utils/types";

interface IFiltersProps {
  handleChaningFilter: (
    type: string,
    optionName: "type" | "friends" | "avatarColor"
  ) => void;
}

const Filters: React.FC<IFiltersProps> = ({
  handleChaningFilter,
}: IFiltersProps): JSX.Element => {
  return (
    <Group>
      <FormLayoutGroup mode="horizontal">
        <Filter
          title="Выберите цвет аватарки"
          id="avatarColor"
          data={colors}
          initialState={"any"}
          onChange={handleChaningFilter}
        />
        <Filter
          title="Выберите тип группы"
          id="type"
          data={GROUPS_OPTION}
          initialState={"any"}
          onChange={handleChaningFilter}
        />
        <Filter
          title="Наличие друзей в группе"
          id="friends"
          data={FRIENDS_OPTION}
          initialState={"any"}
          onChange={handleChaningFilter}
        />
      </FormLayoutGroup>
    </Group>
  );
};

export default Filters;
