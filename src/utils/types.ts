export interface GetGroupsResponse {
  result: 1 | 0;
  data?: IGroup[];
}

export interface IGroup {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

export interface User {
  first_name: string;
  last_name: string;
}

export interface IOption {
  eng: string;
  rus: string;
}

export type FilterOptions = {
  type?: string;
  friends?: string;
  avatarColor?: string;
};
