import MiniCard from "./MiniCard";

const MiniCardList = () => {
  return (
    <div className="d-flex gap-3 justify-content-around my-5">
      <MiniCard city="Rome,IT" />
      <MiniCard city="Turin,IT" />
      <MiniCard city="Naples,IT" />
    </div>
  );
};

export default MiniCardList;
