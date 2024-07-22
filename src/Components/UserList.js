import { userData } from "../constants/appConstants";
import UserIcon from "./UserIcon";

const UserList = ({ openStory }) => {
  return (
    <div className="user-list-container">
      {userData?.map((user, index) => {
        return <UserIcon userData={user} key={index} openStory={openStory} />;
      })}
    </div>
  );
};

export default UserList;
