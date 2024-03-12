import { FormLayoutGroup, Group } from "@vkontakte/vkui";
import { colors, FRIENDS_OPTION, GROUPS_OPTION } from "../../utils/constants";
import Filter from "../filter/filter";
import React from "react";

interface IFiltersProps {}

const Filters: React.FC<IFiltersProps> = (): JSX.Element => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Group>
      <FormLayoutGroup mode={width <= 600 ? "vertical" : "horizontal"}>
        <Filter
          title="Выберите цвет аватарки"
          id="avatarColor"
          data={colors}
          initialState={"any"}
        />
        <Filter
          title="Выберите тип группы"
          id="type"
          data={GROUPS_OPTION}
          initialState={"any"}
        />
        <Filter
          title="Наличие друзей в группе"
          id="friends"
          data={FRIENDS_OPTION}
          initialState={"any"}
        />
      </FormLayoutGroup>
    </Group>
  );
};

export default Filters;
