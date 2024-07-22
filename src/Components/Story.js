const Story = ({ data }) => {
  return (
    <div className="story-content">
      <img src={data} alt="story-img" className="story-img" loading="lazy" />
    </div>
  );
};

export default Story;
