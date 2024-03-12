import { IOption, IGroup, FilterOptions } from "./types";
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
      if (distinctColors[i] === colors[j].value)
        distinctColorsObj.push(colors[j]);
    }
  }
  return distinctColorsObj;
}

export function defineSuffix(num: number): string {
  let result: string = "участника";
  const lastDigital: number = num % 10;
  if (lastDigital >= 5 || lastDigital === 0) {
    result = "участников";
  }

  return result;
}

export function defineSuffixFriends(num: number): string {
  let result: string = "друга";
  const lastDigital: number = num % 10;
  if (lastDigital >= 5 || lastDigital === 0) {
    result = "друзей";
  }

  if (lastDigital === 1) result = "друг";

  return result;
}

export function filterGroups(data: IGroup[], options: FilterOptions): IGroup[] {
  return data.filter((group) => {
    const meetsTypeCriteria =
      options.type === "any" ||
      options.type === undefined ||
      (options.type === "closed" ? group.closed : !group.closed);
    const meetsFriendsCriteria =
      options.friends === "any" ||
      options.friends === undefined ||
      (options.friends === "yes"
        ? group.friends
        : options.friends === "no"
        ? !group.friends
        : true);
    const meetsAvatarCriteria =
      options.avatarColor === "any" ||
      options.avatarColor === undefined ||
      group.avatar_color === options.avatarColor;

    return meetsTypeCriteria && meetsFriendsCriteria && meetsAvatarCriteria;
  });
}
