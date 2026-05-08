import MiniCard from "./MiniCard";

const RegioniCentro = () => {
  return (
    <div className="d-flex flex-wrap gap-3 mx-5 justify-content-center">
      <MiniCard city="Toscana" />
      <MiniCard city="Umbria" />
      <MiniCard city="Marche" />
      <MiniCard city="Lazio" />
      <MiniCard city="Abruzzo" />
    </div>
  );
};

export default RegioniCentro;
