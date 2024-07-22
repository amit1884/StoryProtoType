const ProgressLines = ({ storyCount, active, data }) => {
  return (
    <div className="story-lines">
      {data.story.map((item, index) => {
        return (
          <div
            className="storyLine"
            key={item.id}
            style={{ width: `${100 / storyCount}%` }}
          >
            <div
              className={`story-innerLine ${
                index == active
                  ? "active-story "
                  : index < active
                  ? "full-width"
                  : ""
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressLines;
