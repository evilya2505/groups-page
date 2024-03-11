import { IOption, IGroup } from "./types";
import { colors } from "./constants";

export function findDistinctAvatarColors(data: IGroup[]): IOption[] {
  const distinctColors: string[] = [];
  for (let i = 0; i < data.length; i++) {
    const color: string = data[i].avatar_color || "";
    if (!distinctColors.includes(color) && color !== "") {
      distinctColors.push(color);
    }
  }

  const distinctColorsObj: IOption[] = [];

  for (let i = 0; i < distinctColors.length; i++) {
    for (let j = 0; j < colors.length; j++) {
      if (distinctColors[i] == colors[j].eng) distinctColorsObj.push(colors[j]);
    }
  }
  return distinctColorsObj;
}

export function defineSuffix(num: number): string {
  let result: string = "участника";
  const lastDigital: number = num % 10;
  if (lastDigital >= 5 || lastDigital == 0) {
    result = "участников";
  }

  return result;
}

export function filterByGoupType(type: string, data: IGroup[]): IGroup[] {
  if (type === "any") return data;
  const result: IGroup[] = [];
  const closed: boolean = type === "closed" ? true : false;
  for (let i = 0; i < data.length; i++) {
    if (data[i].closed === closed) result.push(data[i]);
  }

  return result;
}

export function filterByFriends(type: string, data: IGroup[]): IGroup[] {
  if (type === "any") return data;
  const result: IGroup[] = [];
  const isFriends = type === "yes" ? true : false;
  for (let i = 0; i < data.length; i++) {
    if (isFriends) {
      if (data[i]?.friends) result.push(data[i]);
    } else {
      if (!data[i]?.friends) result.push(data[i]);
    }
  }

  return result;
}

export function filterByAvatar(type: string, data: IGroup[]): IGroup[] {
  if (type === "any") return data;
  const result: IGroup[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].avatar_color === type) result.push(data[i]);
  }

  return result;
}
