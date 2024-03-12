import { IOption, IGroup, FilterOptions } from "./types";
import { colors } from "./constants";

export function findDistinctAvatarColors(data: IGroup[]): IOption[] {
  const distinctColors = new Set(
    data.map((group) => group.avatar_color).filter((color) => color)
  );

  return colors.filter((color) => distinctColors.has(color.value));
}

function getRussianPluralForm(num: number, forms: string[]): string {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return forms[2];
  }

  switch (lastDigit) {
    case 1:
      return forms[0];
    case 2:
    case 3:
    case 4:
      return forms[1];
    default:
      return forms[2];
  }
}

export function defineSuffix(num: number): string {
  return getRussianPluralForm(num, ["участник", "участника", "участников"]);
}

export function defineSuffixFriends(num: number): string {
  return getRussianPluralForm(num, ["друг", "друга", "друзей"]);
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
