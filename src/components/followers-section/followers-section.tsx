import { MiniInfoCell, UsersStack } from "@vkontakte/vkui";
import { User } from "../../utils/types";
import { defineSuffix } from "../../utils/utils";

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
    console.log(id, friends);
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
                "https://source.unsplash.com/featured/",
                "https://source.unsplash.com/featured/",
                "https://source.unsplash.com/featured/",
              ]}
            />
          }
        >
          <div style={{ display: "flex" }}>
            <p
              onClick={onFriendsClick}
              style={{ fontSize: "13px", margin: "0px", cursor: "pointer" }}
            >
              {friends.length} друг ·
            </p>
            <p style={{ fontSize: "13px", margin: "0px" }}>
              {`${followers} ${defineSuffix(followers)}`}
            </p>
          </div>
        </MiniInfoCell>
      ) : (
        <p style={{ margin: "0px" }}>{`${followers} ${defineSuffix(
          followers
        )}`}</p>
      )}
    </>
  );
};

export default FollowersSection;
