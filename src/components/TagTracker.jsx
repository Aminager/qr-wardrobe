export const TagTracker = ({ data, updateData }) => {
  const count = data.filter((tag) => tag[2] === 1) || 0;

  return (
    <div className="self-center mt-5">
      <span className="text-ekblue">Number of active tags: {count.length}</span>
      <button onClick={updateData} className="btn btn-neutral ml-5 ">
        Refresh
      </button>
    </div>
  );
};
