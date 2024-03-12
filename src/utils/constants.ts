import { IOption } from "./types";

export const colors: IOption[] = [
  {
    value: "any",
    label: "Все",
  },
  {
    value: "red",
    label: "Красный",
  },
  {
    value: "green",
    label: "Зеленый",
  },
  {
    value: "yellow",
    label: "Желтый",
  },
  {
    value: "blue",
    label: "Синий",
  },
  {
    value: "purple",
    label: "Фиолетовый",
  },
  {
    value: "white",
    label: "Белый",
  },
  {
    value: "orange",
    label: "Оранжевый",
  },
];

export const GROUPS_OPTION: IOption[] = [
  {
    value: "any",
    label: "Все",
  },
  {
    value: "closed",
    label: "Закрытая",
  },
  {
    value: "open",
    label: "Открытая",
  },
];

export const FRIENDS_OPTION: IOption[] = [
  {
    value: "any",
    label: "Все",
  },
  {
    value: "yes",
    label: "Да",
  },
  {
    value: "no",
    label: "Нет",
  },
];
