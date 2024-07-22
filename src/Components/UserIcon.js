const UserIcon = ({ userData, openStory }) => {
  return (
    <div className="user-icon-container">
      <div className="user-profile-pic" onClick={() => openStory(userData.id)}>
        <img src={userData?.profile} alt="profile" className="profile-img" />
      </div>
      <div className="username-container">
        <p>{userData?.username}</p>
      </div>
    </div>
  );
};

export default UserIcon;
