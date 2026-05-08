import MiniCard from "./MiniCard";

const RegioniSud = () => {
  return (
    <div className="d-flex flex-wrap gap-3 mx-5 justify-content-center">
      <MiniCard city="Molise" />
      <MiniCard city="Campania" />
      <MiniCard city="Puglia" />
      <MiniCard city="Basilicata" />
      <MiniCard city="Calabria" />
      <MiniCard city="Sicilia" />
      <MiniCard city="Sardegna" />
    </div>
  );
};

export default RegioniSud;
