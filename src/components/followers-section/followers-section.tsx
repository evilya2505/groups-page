import { MiniInfoCell, UsersStack } from "@vkontakte/vkui";
import { User } from "../../utils/types";
import { defineSuffix, defineSuffixFriends } from "../../utils/utils";

import frollowersSectionStyles from "./followers-section.module.css";

interface IFollowerSectionProps {
  followers: number;
  friends?: User[];
  id: number;
}

const FollowersSection: React.FC<IFollowerSectionProps> = ({
  id,
  followers,
  friends,
}: IFollowerSectionProps): JSX.Element => {
  function onFriendsClick() {
    console.log(id, friends, "открытие попапа");
  }
  return (
    <>
      {friends ? (
        <MiniInfoCell
          style={{ padding: "0", margin: "0" }}
          before={
            <UsersStack
              style={{ cursor: "pointer" }}
              onClick={onFriendsClick}
              photos={[
                "https://picsum.photos/200",
                "https://picsum.photos/200",
                "https://picsum.photos/200",
              ]}
            />
          }
        >
          <div style={{ display: "flex" }}>
            <button
              className={frollowersSectionStyles.button}
              onClick={onFriendsClick}
            >
              {friends.length} {defineSuffixFriends(friends.length)}
            </button>
            <p className={frollowersSectionStyles.text}>
              · {`${followers} ${defineSuffix(followers)}`}
            </p>
          </div>
        </MiniInfoCell>
      ) : (
        <p
          className={frollowersSectionStyles.text}
        >{`${followers} ${defineSuffix(followers)}`}</p>
      )}
    </>
  );
};

export default FollowersSection;
