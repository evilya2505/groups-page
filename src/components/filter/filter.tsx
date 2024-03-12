import { FormItem, NativeSelect } from "@vkontakte/vkui";
import { FilterOptions, IOption } from "../../utils/types";
import { ChangeEventHandler } from "react";
import React from "react";

interface IFilterProps {
  title: string;
  id: "type" | "friends" | "avatarColor";
  data: IOption[];
  onChange: (
    type: string,
    optionName: "type" | "friends" | "avatarColor"
  ) => void;
  initialState: string;
}

const Filter: React.FC<IFilterProps> = ({
  data,
  title,
  id,
  initialState,
  onChange,
}: IFilterProps): JSX.Element => {
  const [value, setValue] = React.useState(initialState);

  React.useEffect(() => {
    onChange(value, id);
  }, [value, id]);

  function onFilterChange(newValue: string) {
    setValue(newValue);
  }
  return (
    <FormItem top={title} htmlFor={id}>
      <NativeSelect
        id={id}
        value={value}
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option key="-1" value="any">
          Любой
        </option>
        {data.map((option, index) => {
          return (
            <option key={index} value={option.eng}>
              {option.rus}
            </option>
          );
        })}
      </NativeSelect>
    </FormItem>
  );
};

export default Filter;
