import { useEffect, useState } from "react";
import ProgressLines from "./ProgressLines";
import Story from "./Story";
const StoryContainer = ({ data, openStoryModal, setOpenStoryModal }) => {
  const [activeStoryData, setActiveStoryData] = useState(data);
  const [activeStory, setActiveStory] = useState(0);
  useEffect(() => {}, [activeStoryData]);
  useEffect(() => {
    let timer;

    const changeActiveStoryHandler = () => {
      if (activeStory < data.story.length - 1) {
        setActiveStory((prevActive) => prevActive + 1);
      } else {
        setActiveStory(0);
        setOpenStoryModal(false);
      }
    };

    if (openStoryModal) {
      timer = setTimeout(() => {
        changeActiveStoryHandler();
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeStory, openStoryModal, setOpenStoryModal]);
  if (openStoryModal)
    return (
      <div className="storyContainer">
        <div className="storyContainerModal">
          <div className="storyContainer-header">
            <ProgressLines
              storyCount={data.story.length}
              active={activeStory}
              data={data}
            />

            <div className="user-info">
              <div className="user-profile-2">
                <img src={data.profile} className="profile-img-2" />
              </div>
              <div className="user-name">{data.username}</div>
            </div>
            <div className="close-btn" onClick={() => setOpenStoryModal(false)}>
              X
            </div>
          </div>
          <Story data={data?.story[activeStory]?.url} />
          <div className="story-footer">
            <input type="text" placeholder="Reply" className="reply-input" />
            <button className="send-btn">Send</button>
          </div>
        </div>
      </div>
    );
};

export default StoryContainer;
