import { MiniInfoCell, Text, UsersStack } from "@vkontakte/vkui";
import { User } from "../../utils/types";
import { defineSuffix, defineSuffixFriends } from "../../utils/utils";
import { useDispatch } from "../../services/hooks";
import {
  setCurrentFriends,
  setGroupName,
  setOpening,
} from "../../services/reducers/friends";

import frollowersSectionStyles from "./followers-section.module.css";

interface IFollowerSectionProps {
  followers: number;
  friends?: User[];
  groupName: string;
}

const FollowersSection: React.FC<IFollowerSectionProps> = ({
  groupName,
  followers,
  friends,
}: IFollowerSectionProps): JSX.Element => {
  const dispatch = useDispatch();

  function onFriendsClick() {
    dispatch(setOpening(true));
    dispatch(setGroupName(groupName));
    dispatch(setCurrentFriends(friends || []));
  }

  function generatePhotosArr() {
    const arr = [];
    const image =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEWpqammpqbT09PX19fc3Nzi4uLm5uajo6Py8vLQ0NDd3d3+/v76+vrx8fHt7e3k5OQpkTr2AAABZ0lEQVR4nO3dQWrCABRF0URNorbV/e+2UmihOKgURE5yzwrenX/4w9v78eNyuczzfJ1uDt/2v+z+b/+nwyPO0wOu853jcF1+jL7lzmmYlmHNxt0wja8e8VSbKDyvvvBQoa1CX4W+Cn0V+ir03Qr3Fdoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfZso3FVoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6GvQt8mLoYqxFXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6FvE19YKsRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0baLwvPrCqUJbhb4KfRX6KvRV6KvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+TRTOy6tHPFWFvgp9Ffoq9FXoq9BXoa9C31fhuGbLaTiedmt2mj8BNIYPDiZn2y8AAAAASUVORK5CYII=";

    if (friends) {
      for (let i = 0; i < friends?.length; i++) {
        arr.push(image);
      }
    }

    return arr;
  }
  return (
    <>
      {friends ? (
        <MiniInfoCell
          className={frollowersSectionStyles.infoCell}
          before={
            <UsersStack
              className={frollowersSectionStyles.usersStack}
              onClick={onFriendsClick}
              photos={generatePhotosArr()}
            />
          }
        >
          <div className={frollowersSectionStyles.textContainer}>
            <button
              className={frollowersSectionStyles.button}
              onClick={onFriendsClick}
            >
              {friends.length} {defineSuffixFriends(friends.length)}
            </button>
            <Text className={frollowersSectionStyles.text}>
              {followers ? `· ${followers} ${defineSuffix(followers)}` : ""}
            </Text>
          </div>
        </MiniInfoCell>
      ) : (
        <Text className={frollowersSectionStyles.text}>
          {followers ? `${followers} ${defineSuffix(followers)}` : ""}
        </Text>
      )}
    </>
  );
};

export default FollowersSection;
