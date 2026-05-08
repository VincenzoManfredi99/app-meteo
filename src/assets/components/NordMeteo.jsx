import MiniCard from "./MiniCard";

const RegioniNord = () => {
  return (
    <div className="d-flex flex-wrap gap-3 mx-5 justify-content-center">
      <MiniCard city="Valle d'Aosta" />
      <MiniCard city="Lombardia" />
      <MiniCard city="Piemonte" />
      <MiniCard city="Trentino-Alto Adige" />
      <MiniCard city="Veneto" />
      <MiniCard city="Emilia-Romagna" />
      <MiniCard city="Liguria" />
    </div>
  );
};

export default RegioniNord;
