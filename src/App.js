import { useCallback, useState } from "react";
import StoryContainer from "./Components/StoryContainer";
import UserList from "./Components/UserList";
import { userData } from "./constants/appConstants";
import "./styles.css";

export default function App() {
  const [openStoryModal, setOpenStoryModal] = useState(false);
  const [currentData, setCurrentData] = useState([]);
  const openStory = useCallback(
    (id) => {
      console.log(id);
      const data = userData.filter((item) => item.id == id);
      setCurrentData(data[0]);
      setOpenStoryModal(true);
    },
    [currentData]
  );
  return (
    <div className="App">
      <div className="app-container">
        <div className="header">Story Viewer</div>
        <UserList openStory={openStory} />
        <StoryContainer
          openStoryModal={openStoryModal}
          setOpenStoryModal={setOpenStoryModal}
          data={currentData}
        />
      </div>
    </div>
  );
}
