import { CustomSelectOption, FormItem, Select } from "@vkontakte/vkui";
import { IOption, OptionsTypes } from "../../utils/types";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "../../services/hooks";

interface IFilterProps {
  title: string;
  id: OptionsTypes;
  data: IOption[];
  initialState: string;
}

const Filter: React.FC<IFilterProps> = ({
  data,
  title,
  id,
  initialState,
}: IFilterProps): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isLoading = useSelector((store) => store.groups.request);
  const [value, setValue] = React.useState(
    searchParams.get(id) || initialState
  );

  React.useEffect(() => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(id, value);

    setSearchParams(newSearchParams);
  }, [value, id, searchParams, setSearchParams]);

  function onFilterChange(newValue: string) {
    setValue(newValue);
  }

  return (
    <FormItem top={title} htmlFor={id}>
      <Select
        id={id}
        value={value}
        options={data}
        onChange={(e) => onFilterChange(e.target.value)}
        disabled={isLoading}
        renderOption={({ option, ...restProps }) => (
          <CustomSelectOption {...restProps} key={option.value} />
        )}
      />
    </FormItem>
  );
};

export default Filter;
