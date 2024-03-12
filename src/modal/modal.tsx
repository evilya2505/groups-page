import {
  Avatar,
  Group,
  ModalPage,
  ModalPageHeader,
  ModalRoot,
  SimpleCell,
} from "@vkontakte/vkui";
import { useSelector, useDispatch } from "../services/hooks";
import { setOpening } from "../services/reducers/friends";
import { defineSuffixFriends } from "../utils/utils";

interface IModalProps {}

const Modal: React.FC<IModalProps> = (): JSX.Element => {
  const dispatch = useDispatch();
  const isOpened = useSelector((store) => store.friends.isOpen);
  const friends = useSelector((store) => store.friends.currentFriends);
  const groupName = useSelector((store) => store.friends.groupName);

  function onCloseFunc() {
    dispatch(setOpening(false));
  }
  return (
    <ModalRoot
      activeModal={isOpened ? "friends-modal" : ""}
      onClose={onCloseFunc}
    >
      <ModalPage
        id="friends-modal"
        settlingHeight={100}
        height={"70%"}
        header={
          <ModalPageHeader>
            {groupName} · {friends.length} {defineSuffixFriends(friends.length)}
          </ModalPageHeader>
        }
      >
        <Group>
          {friends.map((user, index) => {
            return (
              <SimpleCell before={<Avatar src="#" />} key={index}>
                {user.first_name} {user.last_name}
              </SimpleCell>
            );
          })}
        </Group>
      </ModalPage>
    </ModalRoot>
  );
};

export default Modal;
